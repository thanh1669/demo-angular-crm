import { CookieKeys } from '@app-crm/web/shared/data-access/models';
import { AuthService, CookieService } from '@app-crm/web/shared/data-access/services';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, Observable, of, switchMap, tap } from 'rxjs';

interface LoginState {
    isLoading: boolean;
    errMessage: string;
}


@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
    readonly isLoading$ = this.select((s) => s.isLoading);
    readonly errMessage$ = this.select((s) => s.errMessage);

    constructor(
        private cookieService: CookieService,
        private authService: AuthService,
        private router: Router
    ) {
        super({
            isLoading: false,
            errMessage: ''
        });
    }


    readonly vm$: Observable<{
        isLoading: boolean,
        errMessage: string
    }> = this.select(
        this.isLoading$,
        this.errMessage$,
        (isLoading, errMessage) => ({ isLoading, errMessage })
    );

    readonly login = this.effect<{
        username: string,
        password: string,
        service: string
    }>(
        switchMap((dto) =>
            this.authService.sigin(dto).pipe(
                tap(() => {
                    this.patchState((state) => ({
                        ...state,
                        isLoading: true
                    }))
                }),
                tapResponse(
                    (response) => {
                        of(response).pipe(delay(1000)).subscribe(() => {
                            this.patchState(
                                (state) => ({
                                    ...state,
                                    isLoading: false,
                                    errMessage: response.message
                                })
                            );
                            if (response.code === 0) {
                                const { token } = response.data;
                                this.cookieService.set(
                                    CookieKeys.APP_ACCESS_TOKEN,
                                    token.access_token
                                );
                                this.cookieService.set(
                                    CookieKeys.APP_REFRESH_TOKEN,
                                    token.refresh_token
                                );
                                this.cookieService.set(
                                    CookieKeys.APP_USER_ID,
                                    `${response.data.user.id}`
                                );
                                void this.router.navigate(['/']);
                            }
                        });
                    },
                    (error) => {
                        console.log('Handler Error:', error);
                    }
                )
            )
        )
    );
}