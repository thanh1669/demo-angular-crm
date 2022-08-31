/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'ui-input-number',
    templateUrl: './input-number.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIInputNumberComponent {
    @ViewChild('element') inputElement: any = {};

    @Input() nzModel!: number;
    @Input() nzMax!: number;
    @Input() nzMin!: number;
    @Input() nzIcon!: string;
    @Input() nzMode!: string;
    @Input() nzTitle!: string;
    @Input() nzStatus!: string;
    @Input() nzDisabled!: boolean;
    @Input() nzPrecision!: number;
    @Input() nzPlaceHolder!: string;

    @Output() nzBlur = new EventEmitter<string | number>();
    @Output() nzCallback = new EventEmitter<string | number>();

    nzParser = (value: string) => value ? value.replace(/\$\s?|(,*)/g, '') : value;

    nzFormatter = (value: number) => value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value;

    onFocus = () => this.inputElement.elementRef.nativeElement.children[1].children[0].select();
}