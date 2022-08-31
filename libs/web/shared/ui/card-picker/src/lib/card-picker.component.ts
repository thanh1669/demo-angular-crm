/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { NzSizeDSType, NzSizeLDSType } from "ng-zorro-antd/core/types";

@Component({
    selector: 'ui-card-picker',
    templateUrl: './card-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardPickerComponent {
    @Input() nzLoading = false;
    @Input() nzData!: any[];
    @Input() nzModel!: any[];
    @Input() nzTitle!: string;
    @Input() nzMode!: 'date' | 'week' | 'month' | 'year';
    @Input() nzSize!: NzSizeLDSType;
    @Input() nzPlaceHolder = 'Tiêu đề';

    @Input() cardTitle = 'Tiêu đề';
    @Input() cardSize!: NzSizeDSType;
    @Input() cardToggle = true;

    @Output() nzCallback = new EventEmitter<any[]>();
}