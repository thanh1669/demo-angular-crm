import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '@app-crm/web/shared/data-access/services';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'ui-dropdown-thead',
    templateUrl: './dropdown-thead.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIDropdownTheadComponent {
    @Input() nzKey!: string;
    @Input() nzCollums!: any[];
    @Output() nzCallback = new EventEmitter<any>();

    onChange(collum: any) {
        const newCollums = this.nzCollums.map(col => {
            if (col.key === collum.key) {
                col = cloneDeep(collum);
            }
            return col;
        });
        this.nzCallback.emit(collum);
        this.localStorageService.setItem(this.nzKey, newCollums);
    }

    constructor(
        private localStorageService: LocalStorageService
    ) { }
}