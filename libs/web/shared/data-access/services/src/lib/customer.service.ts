import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from '@app-crm/web/shared/app-config';
import { ApiReponse, ApiRequestBody, ApiRequestParams } from '@app-crm/web/shared/data-access/models';


@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private http: HttpClient
    ) { }

    /**
     * List group
     * @param params
     * @returns
     */
    list(params: ApiRequestParams): Observable<ApiReponse> {
        return this.http.get<ApiReponse>(
            `${this.appConfig.apiUrl}/v1/users`,
            { params }
        );
    }

    /**
     * Create
     * @param params
     * @returns
     */
    create(body: ApiRequestBody): Observable<ApiReponse> {
        return this.http.post<ApiReponse>(
            `${this.appConfig.apiUrl}/v1/users`,
            body
        );
    }


    /**
     * Download
     * @param params
     * @returns
     */
    download(params: ApiRequestParams): Observable<ApiReponse> {
        return this.http.post<ApiReponse>(
            `${this.appConfig.apiUrl}/v1/user-excels/report`,
            {
                type: 'export',
                query: params
            }
        );
    }
}
