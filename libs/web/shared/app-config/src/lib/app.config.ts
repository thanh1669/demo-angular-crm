import { InjectionToken, ValueProvider } from '@angular/core';
import { AppConfig } from './app.model';

// App Config
export const APP_CONFIG = new InjectionToken<AppConfig>('app-crm.config');
export const getAppConfigProvider = (value: AppConfig): ValueProvider => ({
    provide: APP_CONFIG,
    useValue: value
});
