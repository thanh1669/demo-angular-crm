import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIInputNumberComponent } from './input-number.component';

@NgModule({
    declarations: [
        UIInputNumberComponent
    ],
    exports: [
        UIInputNumberComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UIInputNumberModule { }
