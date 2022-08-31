import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-input-text',
    templateUrl: './input-text.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIInputTextComponent {
    @Input() nzIcon!: string;
    @Input() nzMode!: string;
    @Input() nzTitle!: string;
    @Input() nzModel!: string;
    @Input() nzPlaceHolder!: string;

    @Output() nzCallback = new EventEmitter<string | number>();
}
