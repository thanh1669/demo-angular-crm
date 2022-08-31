/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { NzSizeDSType, NzSizeLDSType } from "ng-zorro-antd/core/types";

@Component({
    selector: 'ui-card-select',
    templateUrl: './card-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardSelectComponent {
    @Input() nzData!: any[];
    @Input() nzModel!: any;
    @Input() nzLoading = false;
    @Input() nzAllowClear = true;
    @Input() nzShowSearch = true;
    @Input() nzSize!: NzSizeLDSType;
    @Input() nzPlaceHolder = 'Tiêu đề';

    @Input() cardTitle = 'Tiêu đề';
    @Input() cardSize!: NzSizeDSType;
    @Input() cardToggle = true;

    @Output() nzCallback = new EventEmitter<any>();
    @Output() searchChange = new EventEmitter<any>();
}