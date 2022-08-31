import { AppConfig, APP_CONFIG } from '@app-crm/web/shared/app-config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiReponse, ApiRequestParams } from '@app-crm/web/shared/data-access/models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient
    ) { }

    getMe(userId: number): Observable<ApiReponse> {
        return this.http.get<ApiReponse>(`${this.appConfig.apiUrl}/v1/users/${userId}`);
    }


    list(params: ApiRequestParams): Observable<ApiReponse> {
        return this.http.get<ApiReponse>(`${this.appConfig.apiUrl}/v1/staffs`, { params });
    }
}
