/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { NzSizeDSType, NzSizeLDSType } from "ng-zorro-antd/core/types";

@Component({
    selector: 'ui-card-radio',
    templateUrl: './card-radio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardRadioComponent {
    @Input() nzLoading = false;
    @Input() nzData!: any[];
    @Input() nzModel!: any[];
    @Input() nzSize!: NzSizeLDSType;
    @Input() nzPlaceHolder = 'Tiêu đề';
    @Input() inputTemplate!: TemplateRef<any>;

    @Input() cardTitle = 'Tiêu đề';
    @Input() cardSize!: NzSizeDSType;
    @Input() cardToggle = true;

    @Output() nzCallback = new EventEmitter<any>();
}