/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from "@angular/core";
import { NzSizeDSType, NzSizeLDSType } from "ng-zorro-antd/core/types";

@Component({
    selector: 'ui-card-input',
    templateUrl: './card-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardInputComponent {
    @Input() nzModel!: any[];
    @Input() nzData!: any[];
    @Input() nzSize!: NzSizeLDSType;
    @Input() nzPlaceHolder = 'Tiêu đề';

    @Input() cardTitle = 'Tiêu đề';
    @Input() cardSize!: NzSizeDSType;
    @Input() cardToggle = true;

    @Input() inputTemplate!: TemplateRef<any>;

    @Output() nzCallback = new EventEmitter<any[]>();

    onSubmit() {
        const params: any = {};
        this.nzData.map(i => { params[i.key] = i.value });
        this.nzCallback.emit(params);
    }
}