import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIInputTextComponent } from './input-text.component';

@NgModule({
    declarations: [
        UIInputTextComponent
    ],
    exports: [
        UIInputTextComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UIInputTextModule { }
