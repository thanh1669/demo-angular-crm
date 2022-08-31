import { Route } from '@angular/router';
import { LayoutComponent } from '@app-crm/web/shell/ui/layout';

export const webShellRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'customer',
                loadChildren: async () => (await import('@app-crm/web/partner/feature/customer')).CustomerModule
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        loadChildren: async () => (await import('@app-crm/web/auth/feature/login')).LoginModule
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
