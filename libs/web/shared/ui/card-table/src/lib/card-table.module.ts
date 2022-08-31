import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardTableComponent } from './card-table.component';

@NgModule({
    declarations: [
        UICardTableComponent
    ],
    exports: [
        UICardTableComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UICardTableModule { }
