import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardPickerComponent } from './card-picker.component';

@NgModule({
    declarations: [
        UICardPickerComponent
    ],
    exports: [
        UICardPickerComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WebSharedNgzoroModule
    ]
})
export class UICardPickerModule { }
