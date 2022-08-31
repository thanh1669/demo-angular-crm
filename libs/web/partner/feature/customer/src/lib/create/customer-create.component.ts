/* eslint-disable */
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomerStore } from "@app-crm/web/partner/data-access/stores";
import { isEmpty, isNil, omitBy } from "lodash";
import { NzModalRef } from "ng-zorro-antd/modal";
import { Observable, of } from "rxjs";

@Component({
    selector: 'app-crm-customer-create',
    templateUrl: './customer-create.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CustomerStore]
})
export class CustomerCreateComponent implements OnInit {
    vm$ = this.store.vm$;
    customerForm!: FormGroup;
    formResult$!: Observable<any>;

    initForm() {
        this.customerForm = this.fb.group({
            name: [],
            type: [],
            phone: [],
            avatar: [],
            tax_code: [],
            birthday: [],
            email: [],
            gender: [],
            facebook: [],
            address: [],
            note: [],
            group: this.fb.group({
                id: [],
                name: []
            }),
            province: this.fb.group({
                id: [],
                code: [],
                name: []
            }),
            district: this.fb.group({
                id: [],
                code: [],
                name: []
            }),
            ward: this.fb.group({
                id: [],
                code: [],
                name: []
            }),
        });
    }

    initState() {
        this.store.initFilter();
    }

    resetForm(): void {
        this.customerForm.reset();
    }

    submit(isCompleted: boolean): void {
        this.store.create({
            status: isCompleted ? 'complete' : 'reset',
            payload: this.getNoEmptyFormValue()
        });
    }

    getNoEmptyFormValue() {
        const customerFormValue = omitBy(
            this.customerForm.value, isNil
        );
        const provinceFormValue = this.customerForm.get('province.code')?.value
            ? this.customerForm.get('province')?.value
            : null;
        const districtFormValue = this.customerForm.get('district.code')?.value
            ? this.customerForm.get('district')?.value
            : null;
        const wardFormValue = this.customerForm.get('ward.code')?.value
            ? this.customerForm.get('ward')?.value
            : null;
        const groupFormValue = this.customerForm.get('group.id')?.value
            ? this.customerForm.get('group')?.value
            : null;
        return {
            ...customerFormValue,
            group: groupFormValue,
            province: provinceFormValue,
            district: districtFormValue,
            ward: wardFormValue
        };
    }

    getLocationByGroup(groupKey: 'province' | 'district' | 'ward', isOpend: boolean) {
        if (isOpend && groupKey === 'province') {
            this.store.getLocationList({
                key: 'provinces'
            });
        }
        if (isOpend && groupKey === 'district') {
            this.store.getLocationList({
                key: 'districts',
                province_code: this.customerForm.get('province.code')?.value
            });
        }
        if (isOpend && groupKey === 'ward') {
            this.store.getLocationList({
                key: 'wards',
                district_code: this.customerForm.get('district.code')?.value
            });
        }
    }

    setLocationValueWhenChange(formKey: 'province' | 'district' | 'ward', formValue: any, formData: any[]) {
        if (formData && formData.length) {
            const value = formData.find(
                i => i.code === formValue
            );
            if (formKey) {
                this.customerForm.get(`${formKey}.id`)!.setValue(value?.id);
                this.customerForm.get(`${formKey}.name`)!.setValue(value?.name);
            }
            if (formKey === 'province') {
                this.customerForm.get('district')!.setValue({ id: null, code: null, name: null });
            }
            if (formKey === 'province' || formKey === 'district') {
                this.customerForm.get('ward')!.setValue({ id: null, code: null, name: null });
            }
        }
    }

    setCustomerGroupValueWhenChange(formValue: any, formData: any[]) {
        const value = formData.find(i => i.id === formValue);
        if (value) this.customerForm.get('group.name')!.setValue(value.name);
    }

    setAvatarWhenStateChange(input$: any) {
        if (input$.type === 'removed') {
            this.customerForm.get('avatar')?.setValue(null);
        } else {
            this.customerForm.get('avatar')?.setValue(input$.file?.response?.url);
        }
    }

    subScribeFormStatus() {
        this.store.formState$.subscribe((form) => {
            if (form && form['status']) {
                this.formResult$ = of(
                    form['status']
                );
                if (form['status'] === 'complete') {
                    this.modalRef.triggerCancel();
                }
                if (form['status'] === 'reset') {
                    this.resetForm();
                }
            }
        });
    }

    ngOnInit(): void {
        this.initForm();
        this.initState();
        this.subScribeFormStatus();
    }

    constructor(
        private fb: FormBuilder,
        private store: CustomerStore,
        private modalRef: NzModalRef
    ) { }
}