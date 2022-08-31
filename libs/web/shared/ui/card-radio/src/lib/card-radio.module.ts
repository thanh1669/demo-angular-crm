import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardRadioComponent } from './card-radio.component';

@NgModule({
    declarations: [
        UICardRadioComponent
    ],
    exports: [
        UICardRadioComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UICardRadioModule { }
