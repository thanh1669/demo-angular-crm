/* eslint-disable @typescript-eslint/no-explicit-any */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PromptUpdateService {
    constructor(
        private updates: SwUpdate,
        @Inject(DOCUMENT) private readonly document: Document
    ) { }

    forceUpdate(): Observable<any | null> {
        if (!this.updates.isEnabled) {
            return of(null);
        }
        return this.updates.versionUpdates.pipe(
            tap((version) => {
                this.updates.activateUpdate().then(() => {
                    console.log(
                        `[CRM] PWA is updating ${version}...`
                    );
                    if (
                        confirm(
                            `There is a new version of CRM available! Would you like to upgrade now?`
                        )
                    ) {
                        this.document.location.reload();
                    }
                });
            })
        );
    }
}
