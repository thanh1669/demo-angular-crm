import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { webShellRoutes } from './web-shell.route';
import { WebLayoutModule } from '@app-crm/web/shell/ui/layout';

@NgModule({
    imports: [
        CommonModule,
        WebLayoutModule,
        RouterModule.forRoot(webShellRoutes, {
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [RouterModule],
    declarations: []
})
export class WebShellModule { }
