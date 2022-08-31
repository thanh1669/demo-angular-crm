/* eslint-disable */
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, TemplateRef } from "@angular/core";
import { AppConfig, APP_CONFIG } from '@app-crm/web/shared/app-config';

@Component({
    selector: 'ui-button-upload',
    templateUrl: './button-upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIButtonUploadComponent {
    apiUrl = '';

    @Input() set nzAction(value: string) {
        this.apiUrl = `${this.appConfig.apiUrl}/${value}`;
    };
    @Input() nzListType!: any;
    @Input() nzFileList!: any[];
    @Input() nzShowButton!: boolean;
    @Input() buttonTemplateRef!: TemplateRef<null>;
    @Output() nzCallback = new EventEmitter<any>();

    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
    ) { }
}