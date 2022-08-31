import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UIDropdownTheadComponent } from './dropdown-thead.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UIDropdownTheadComponent
    ],
    exports: [
        UIDropdownTheadComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        WebSharedNgzoroModule
    ]
})
export class UIDropdownTheadModule { }
