/* eslint-disable */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'ui-dropdown-upload',
    templateUrl: './dropdown-upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIDropdownUploadComponent {
    @Input() nzTitle!: string;
    @Input() nzFormTemplate!: TemplateRef<null>;


    fileChange($event: any) {
        console.log($event);
    }
}