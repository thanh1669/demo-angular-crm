/* eslint-disable */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-dropdown-download',
    templateUrl: './dropdown-download.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIDropdownDownloadComponent {
    @Input() nzFileList!: any[];
    @Input() nzActions!: any[];

    @Output() nzCallback = new EventEmitter<string>();
}