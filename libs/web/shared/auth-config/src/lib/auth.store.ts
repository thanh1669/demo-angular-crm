/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ComponentStore } from '@ngrx/component-store';
import { filter, map, switchMapTo, tap } from "rxjs/operators";
import { AccountService, CookieService, LocalStorageService } from "@app-crm/web/shared/data-access/services";
import { ApiReponse, CookieKeys, LocalStorageKeys } from "@app-crm/web/shared/data-access/models";

export interface AuthState {
    id: number;
    name: string;
    stores: any[];
    permissions: string[];
    accessToken: string;
    expiresIn: number;
}

@Injectable({ providedIn: 'root' })
export class AuthStore extends ComponentStore<AuthState> {
    readonly name$ = this.select((s) => s.name);
    readonly stores$ = this.select((s) => s.stores);
    readonly token$ = this.select((s) => s.accessToken);
    readonly permissions$ = this.select((s) => s.permissions);
    readonly currentStore$ = this.select((s) => s.stores && s.stores.find(store => store.id === this.localStorageService.getItem(LocalStorageKeys.CURRENT_STORE_ID) || s.stores[0]));

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cookieService: CookieService,
        private accountService: AccountService,
        private localStorageService: LocalStorageService
    ) {
        super(<AuthState>{});
    }

    /**
     * Init
     */
    readonly init = this.effect(
        (param$) => param$.pipe(switchMapTo(
            this.initAuth()
        ))
    );

    /**
     * Set State
     * @param {Object} user
     */
    readonly setCurrentUser = this.updater((state, data: ApiReponse) => {
        console.log('USER LOGGED IN', data);
        return {
            ...state,
            ...data.data
        };
    });

    /**
     * Redirect with authorize
     */
    redirectToAuthorize() {
        const userId = this.cookieService.get(CookieKeys.APP_USER_ID);
        const userToken = this.cookieService.get(CookieKeys.APP_ACCESS_TOKEN);
        window.location.href = userToken ? `${this.router.url}#&access_token=${userToken}&user_id=${userId}` : '/login#access_token=0';
    }

    /**
     * Authorize
     */
    private initAuth() {
        if (!window.location.hash) {
            this.redirectToAuthorize();
        }

        return this.route.fragment.pipe(
            filter((fragment) => !!fragment),
            map((fragment) => new URLSearchParams(fragment as string)),
            map((params) => ({
                userId: Number(params.get('user_id')),
                accessToken: params.get('access_token') || ''
            })),
            tap((params) => {
                this.patchState(params);
                console.log('[Angular CRM] Authenticated!');
            }),
            tap((params) => {
                this.setCurrentUser(this.accountService.getMe(params.userId));
                this.router.navigate([]);
            })
        );
    }
}