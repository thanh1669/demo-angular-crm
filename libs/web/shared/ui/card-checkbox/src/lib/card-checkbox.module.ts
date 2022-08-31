import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardCheckboxComponent } from './card-checkbox.component';

@NgModule({
    declarations: [
        UICardCheckboxComponent
    ],
    exports: [
        UICardCheckboxComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UICardCheckBoxModule { }
