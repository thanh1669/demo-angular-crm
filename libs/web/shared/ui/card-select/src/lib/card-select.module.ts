import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardSelectComponent } from './card-select.component';

@NgModule({
    declarations: [
        UICardSelectComponent
    ],
    exports: [
        UICardSelectComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UICardSelectModule { }
