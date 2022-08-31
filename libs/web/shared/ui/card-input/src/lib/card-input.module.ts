import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardInputComponent } from './card-input.component';
import { UIInputTextModule } from '@app-crm/web/shared/ui/input-text';
import { UIInputNumberModule } from '@app-crm/web/shared/ui/input-number';

@NgModule({
    declarations: [
        UICardInputComponent
    ],
    exports: [
        UICardInputComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        UIInputTextModule,
        UIInputNumberModule,
        WebSharedNgzoroModule
    ]
})
export class UICardInputModule { }
