import { AppConfig, APP_CONFIG } from '@app-crm/web/shared/app-config';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReponse, ApiRequestParams } from '@app-crm/web/shared/data-access/models';


@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private http: HttpClient
    ) { }

    /**
     * List group
     * @param params
     * @returns
     */
    list(url: 'provinces' | 'districts' | 'wards', params: ApiRequestParams): Observable<ApiReponse> {
        return this.http.get<ApiReponse>(
            `${this.appConfig.apiUrl}/v1/${url}`,
            { params }
        );
    }
}
