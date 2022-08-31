/* eslint-disable */
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { concatMap, delay, forkJoin, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { CustomerCreateComponent } from '@app-crm/web/partner/feature/customer'
import { AccountService, ConstantService, CustomerGroupService, CustomerService, LocationService } from '@app-crm/web/shared/data-access/services';
import { AuthStore } from '@app-crm/web/shared/auth-config'
import { includes, isNil, omitBy, unionBy } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ConstantsType } from '@app-crm/web/shared/data-access/models';

interface CustomerState {
    // Page state
    types: any[];
    groups: any[];
    collums: any[];
    staffs: any[];
    genders: any[];
    statuses: any[];
    provinces: any[];
    districts: any[];
    wards: any[];
    customers: any[];
    uploadFiles: any[];
    downloadFiles: any[];
    rowSelectedKeys: Set<any>;

    // Page config
    formState: { [key: string]: any };
    pageFilter: { [key: string]: any };
    pageLoading: { [key: string]: boolean };
    pageAuthorize: { [key: string]: boolean };
}

@Injectable({ providedIn: 'root' })
export class CustomerStore extends ComponentStore<CustomerState> {
    types$ = this.select((s) => s.types);
    staffs$ = this.select((s) => s.staffs);
    groups$ = this.select((s) => s.groups);
    collums$ = this.select((s) => s.collums);
    genders$ = this.select((s) => s.genders);
    statuses$ = this.select((s) => s.statuses);
    provinces$ = this.select((s) => s.provinces);
    districts$ = this.select((s) => s.districts);
    wards$ = this.select((s) => s.wards);
    customers$ = this.select((s) => s.customers);
    uploadFiles$ = this.select((s) => s.uploadFiles);
    downloadFiles$ = this.select((s) => s.downloadFiles);
    rowSelectedKeys$ = this.select((s) => s.rowSelectedKeys);

    formState$ = this.select((s) => s.formState);
    pageFilter$ = this.select((s) => s.pageFilter);
    pageLoading$ = this.select((s) => s.pageLoading);
    pageAuthorize$ = this.select((s) => s.pageAuthorize);

    readonly vm$ = this.select(
        this.types$,
        this.staffs$,
        this.groups$,
        this.collums$,
        this.genders$,
        this.statuses$,
        this.provinces$,
        this.districts$,
        this.wards$,
        this.customers$,
        this.uploadFiles$,
        this.downloadFiles$,
        this.rowSelectedKeys$,
        this.pageFilter$,
        this.pageLoading$,
        this.pageAuthorize$,
        (types, staffs, groups, collums, genders, statuses, provinces, districts, wards, customers, uploadFiles, downloadFiles, rowSelectedKeys, pageFilter, pageLoading, pageAuthorize) => ({
            types,
            staffs: staffs ?
                staffs.map((staff) => ({
                    key: staff.id,
                    title: staff.name,
                    ...staff
                }))
                : [],
            groups: groups
                ? groups.map((group) => ({
                    key: group.id,
                    title: group.name,
                    ...group
                }))
                : [],
            collums,
            genders,
            statuses,
            provinces,
            districts,
            wards,
            customers,
            uploadFiles,
            downloadFiles,
            rowSelectedKeys,
            pageFilter,
            pageLoading,
            pageAuthorize
        })
    );

    readonly initAuth = this.effect(() =>
        this.authStore.permissions$.pipe(
            tap((permissions) => {
                this.patchState({
                    pageAuthorize: {
                        view: includes(permissions, 'account_service_user_view'),
                        create: includes(permissions, 'account_service_user_create'),
                        update: includes(permissions, 'account_service_user_update'),
                        delete: includes(permissions, 'account_service_user_delete'),
                        upload: includes(permissions, 'account_service_user_import'),
                        download: includes(permissions, 'account_service_user_export'),
                    }
                })
            })
        )
    )

    readonly initFilter = this.effect(params$ =>
        params$.pipe(
            tap(() => {
                this.patchState({
                    pageLoading: { filter: true }
                })
            }),
            switchMap(() =>
                forkJoin([
                    this.constantService.getItem(
                        ConstantsType.CUSTOMER_TYPES
                    ),
                    this.constantService.getItem(
                        ConstantsType.CUSTOMER_GENDERS
                    ),
                    this.constantService.getItem(
                        ConstantsType.CUSTOMER_STATUSES
                    ),
                    this.constantService.getItem(
                        ConstantsType.CUSTOMER_COLLUMS
                    ),
                    this.accountService.list({
                        skip: 0,
                        limit: 100,
                        statuses: 'active'
                    }),
                    this.groupService.list({
                        skip: 0,
                        limit: 100,
                        statuses: 'active'
                    })
                ]).pipe(
                    tapResponse(
                        ([types, genders, statuses, collums, staffRes, groupRes]) => {
                            this.patchState({
                                types: types,
                                collums: collums,
                                genders: genders,
                                statuses: statuses,
                                groups: groupRes.data,
                                staffs: staffRes.data,
                                pageLoading: { filter: false }
                            });
                            this.setFilter({
                                skip: 0,
                                limit: 20,
                                types: types[0].key,
                                genders: genders[0].key,
                                statuses: statuses[0].key
                            })
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                )
            )
        )
    );

    readonly setFilter = this.effect<{ [key: string]: any }>((params$) =>
        params$.pipe(
            tap((params) => {
                this.patchState((state) => ({
                    pageLoading: { view: true },
                    pageFilter: { order_by: 'desc', sort_by: 'created_at', ...state.pageFilter, ...params }
                }))
            }),
            map(() => this.get()),
            tap((state) => this.list(omitBy(state.pageFilter, isNil)))
        )
    );

    readonly setCollumVisibility = this.effect<{ collum: any }>(params$ => (
        params$.pipe(
            tap(({ collum }) => {
                this.patchState((state) => ({
                    collums: unionBy(state.collums, [collum], 'key')
                }))
            })
        )
    ));

    // readonly setEditGroupVisibility

    // readonly setCreateGroupVisibility


    readonly setCustomerCreateVisibility = this.effect<{ isShow: boolean }>(params$ =>
        params$.pipe(
            tap(({ isShow }) => {
                if (isShow) {
                    this.modalService.create({
                        nzFooter: null,
                        nzWidth: '120vh',
                        nzNoAnimation: true,
                        nzTitle: 'Thêm mới khách hàng',
                        nzContent: CustomerCreateComponent,
                        nzOnCancel: ({ formResult$ }) => {
                            if (formResult$) {
                                this.setFilter({ ref: Date.now() });
                            }
                        }
                    })
                }
            })
        )
    );


    readonly setListButtonAddOnVisibility = this.effect<{ values: Set<any> }>(params$ =>
        params$.pipe(
            tap(({ values }) => {
                this.patchState({
                    rowSelectedKeys: values
                });
            })
        )
    );



    readonly getLocationList = this.effect<{ [key: string]: any }>(params$ => (
        params$.pipe(
            tap((params) => {
                this.patchState({
                    pageLoading: {
                        [params['key']]: true
                    }
                })
            }),
            switchMap((params) =>
                this.locationService.list(
                    params['key'],
                    params
                ).pipe(
                    tapResponse(
                        (response) => {
                            this.patchState({
                                [params['key']]: response.data,
                                pageLoading: { [params['key']]: false }
                            });
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                )
            )
        )
    ));

    readonly list = this.effect<{ [key: string]: any }>(params$ =>
        params$.pipe(
            tap(() => {
                this.patchState({
                    pageFilter: { view: true }
                })
            }),
            switchMap((params) =>
                this.customerService.list(params).pipe(
                    tapResponse(
                        (response) => {
                            this.patchState({
                                pageLoading: { view: false },
                                pageFilter: { ...params, pageCount: response.count },
                                customers: this.transform(response.data)
                            });
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                )
            )
        )
    );

    // readonly get

    readonly create = this.effect<{ [key: string]: any }>(params$ =>
        params$.pipe(
            tap(() => {
                this.patchState({
                    pageLoading: { create: true },
                    formState: { status: 'pending' }
                })
            }),
            withLatestFrom(
                this.authStore.currentStore$
            ),
            concatMap(([{ status, payload }, store]) =>
                this.customerService.create({ ...payload, stores: [store] }).pipe(
                    delay(1000),
                    tapResponse(
                        response => {
                            this.notiService.create(
                                response.code ? 'error' : 'success',
                                'Thông báo',
                                response.message
                            );
                            this.patchState({
                                pageLoading: { create: false },
                                formState: { status: response.code ? 'failure' : status }
                            });
                        },
                        err => {
                            console.log(err);
                        }
                    )
                )
            )
        )
    )

    // readonly update

    // readonly block

    // readonly active

    // readonly delete

    // readonly upload

    readonly download = this.effect<{ type: string }>(params$ =>
        params$.pipe(
            map(() => this.get()),
            tap(({ downloadFiles }) => {
                this.patchState({
                    downloadFiles: [
                        ...downloadFiles || [],
                        {
                            uid: Date.now(),
                            url: 'Đang tải dữ liệu...',
                            name: 'Đang tải dữ liệu...',
                            percent: 50,
                            status: 'uploading',
                        }
                    ]
                })
            }),
            switchMap(({ downloadFiles, pageFilter }) =>
                this.customerService.download(pageFilter).pipe(
                    tapResponse(
                        (response) => {
                            const { url } = response as any;
                            this.patchState({
                                downloadFiles: [
                                    ...downloadFiles || [],
                                    {
                                        uid: Date.now(),
                                        url: url || 'Download File Error',
                                        name: url && url.split('/').slice(-1)[0],
                                        status: response.code ? 'error' : 'done',
                                    }
                                ]
                            });
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                )
            )
        )
    );

    private transform(data: any[]) {
        return data.map(item => {
            if (item.id) {
                item.id = `KH000${item.id}`
            }
            if (item.type === 'individual') {
                item.type_name = 'Cá nhân';
            }
            if (item.type === 'company') {
                item.type_name = 'Công ty';
            }
            if (item.gender === 'male') {
                item.gender_name = 'Nam';
            }
            if (item.gender === 'female') {
                item.gender_name = 'Nữ';
            }
            return item;
        })
    };

    constructor(
        private groupService: CustomerGroupService,
        private customerService: CustomerService,
        private accountService: AccountService,
        private locationService: LocationService,
        private constantService: ConstantService,
        private notiService: NzNotificationService,
        private modalService: NzModalService,
        private authStore: AuthStore,
    ) {
        super(<CustomerState>{});
    }
}