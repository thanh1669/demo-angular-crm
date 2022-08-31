import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { WebShellModule } from '@app-crm/web/shell/feature';

import vi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';

import { getAppConfigProvider } from '@app-crm/web/shared/app-config';
import { unauthorizedInterceptorProvider, authInterceptorProvider } from '@app-crm/web/shared/auth-config';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

registerLocaleData(vi);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        WebShellModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js',
            {
                enabled: environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }
        )
    ],
    providers: [
        authInterceptorProvider,
        unauthorizedInterceptorProvider,
        getAppConfigProvider(environment),
        { provide: NZ_I18N, useValue: vi_VN }
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
