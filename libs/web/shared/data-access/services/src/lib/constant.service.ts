import { Injectable } from '@angular/core';
import { ConstantsGroup, ConstantsType } from '@app-crm/web/shared/data-access/models';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class ConstantService {
    /**
     * Gets local state by key
     *
     * @param {string} key
     * @return {*} {*}
     */
    getItem(key: ConstantsType): Observable<any> {
        const cached = this.localStorageService.getItem(key);
        if (cached) return of(cached);

        return of(ConstantsGroup[key]);
    }

    constructor(
        private localStorageService: LocalStorageService
    ) { }
}