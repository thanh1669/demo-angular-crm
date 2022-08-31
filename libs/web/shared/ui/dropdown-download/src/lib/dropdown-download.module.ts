import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIDropdownDownloadComponent } from './dropdown-download.component';

@NgModule({
    declarations: [
        UIDropdownDownloadComponent
    ],
    exports: [
        UIDropdownDownloadComponent
    ],
    imports: [
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UIDropdownDownLoadModule { }
