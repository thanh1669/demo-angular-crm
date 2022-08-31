import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';
import { UICardRadioModule } from '@app-crm/web/shared/ui/card-radio';
import { UICardCheckBoxModule } from '@app-crm/web/shared/ui/card-checkbox';
import { UICardTableModule } from '@app-crm/web/shared/ui/card-table';
import { UICardPickerModule } from '@app-crm/web/shared/ui/card-picker';
import { UICardSelectModule } from '@app-crm/web/shared/ui/card-select';
import { UICardInputModule } from '@app-crm/web/shared/ui/card-input';
import { UIButtonUploadModule } from '@app-crm/web/shared/ui/button-upload';
import { UIDropdownTheadModule } from '@app-crm/web/shared/ui/dropdown-thead';
import { UIDropdownUploadModule } from '@app-crm/web/shared/ui/dropdown-upload';
import { UIDropdownDownLoadModule } from '@app-crm/web/shared/ui/dropdown-download';

import { CustomerListComponent } from './list/customer-list.component';
import { CustomerCreateComponent } from './create/customer-create.component';

@NgModule({
    declarations: [
        CustomerListComponent,
        CustomerCreateComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        UICardRadioModule,
        UICardTableModule,
        UICardPickerModule,
        UICardSelectModule,
        UICardInputModule,
        UICardCheckBoxModule,
        UIDropdownTheadModule,
        UIDropdownUploadModule,
        UIDropdownDownLoadModule,
        UIButtonUploadModule,
        WebSharedNgzoroModule,
        RouterModule.forChild([
            {
                path: '',
                component: CustomerListComponent
            }
        ])
    ]
})
export class CustomerModule { }
