import { AppConfig, APP_CONFIG } from '@app-crm/web/shared/app-config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReponse } from '@app-crm/web/shared/data-access/models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private http: HttpClient
    ) { }

    /**
     * Sigin
     * @param body
     * @returns
     */
    sigin(body: { username: string, password: string, service: string }): Observable<ApiReponse> {
        return this.http.post<ApiReponse>(
            `${this.appConfig.apiUrl}/v1/auth/login-password?group=we`,
            body
        );
    }
}
