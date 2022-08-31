import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIButtonUploadComponent } from './button-upload.component';

@NgModule({
    declarations: [
        UIButtonUploadComponent
    ],
    exports: [
        UIButtonUploadComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UIButtonUploadModule { }
