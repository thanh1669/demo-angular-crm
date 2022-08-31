import { Injectable, Provider } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '@app-crm/web/shared/data-access/services';
import { CookieKeys } from '@app-crm/web/shared/data-access/models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.cookieService.get(
            CookieKeys.APP_ACCESS_TOKEN
        );
        if (!token) {
            return next.handle(req);
        }
        const headers = req.headers.set('Authorization', `Bearer ${token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}

export const authInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
