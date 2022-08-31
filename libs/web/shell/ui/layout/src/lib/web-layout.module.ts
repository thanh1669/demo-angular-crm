import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './web-layout.component';
import { RouterModule } from '@angular/router';
import { WebSharedNgzoroModule } from '@app-crm/web/shared/ui/ngzoro';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        WebSharedNgzoroModule
    ]
})
export class WebLayoutModule { }
