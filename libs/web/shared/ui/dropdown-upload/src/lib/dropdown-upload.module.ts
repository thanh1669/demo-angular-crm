import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIDropdownUploadComponent } from './dropdown-upload.component';

@NgModule({
    declarations: [
        UIDropdownUploadComponent
    ],
    exports: [
        UIDropdownUploadComponent
    ],
    imports: [
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UIDropdownUploadModule { }
