/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { NzSizeDSType, NzSizeLDSType } from "ng-zorro-antd/core/types";

@Component({
    selector: 'ui-card-checkbox',
    templateUrl: './card-checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardCheckboxComponent {
    @Input() nzLoading = false;
    @Input() nzData!: any[];
    @Input() nzModel!: any[];
    @Input() nzSize!: NzSizeLDSType;
    @Input() nzPlaceHolder = 'Tiêu đề';

    @Input() cardTitle = 'Tiêu đề';
    @Input() cardSize!: NzSizeDSType;
    @Input() cardToggle = true;

    @Input() inputTemplate!: TemplateRef<any>;
    @Output() nzCallback = new EventEmitter<any[]>();

    nzEvent(event$: any) {
        console.log('EVENT CHANGED', event$);
    }

    onSearch(event$: any) {
        console.log('EVENT CHANGED', event$);
    }
}