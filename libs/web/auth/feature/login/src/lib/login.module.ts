import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ]),
        ReactiveFormsModule,
        WebSharedNgzoroModule
    ]
})
export class LoginModule { }
