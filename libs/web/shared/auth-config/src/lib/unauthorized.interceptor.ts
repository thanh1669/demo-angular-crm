/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpStatusCode,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Provider } from '@angular/core';
import { tapResponse } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';

export class UnauthorizedInterceptor implements HttpInterceptor {
    // constructor(private uiStore: UIStore) { }

    intercept(
        req: HttpRequest<Record<string, string>>,
        next: HttpHandler
    ): Observable<HttpEvent<Record<string, string>>> {
        return next.handle(req).pipe(
            tapResponse(
                (response: any) => {
                    if (
                        req.body &&
                        Number(req.body['code']) === HttpStatusCode.Unauthorized
                    ) {
                        console.log('Xin lỗi hiện tại tài khoản của bạn không có quyền truy cập vào tính năng này', response.body)
                    }
                    return of(response);
                },
                ((err: any) => {
                    if (err.status === 401) {
                        console.log('Xin lỗi hiện tại tài khoản của bạn không có quyền truy cập vào tính năng này')
                    }
                    return of(err);
                })
            )
        );
    }
}

export const unauthorizedInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true,
    // deps: [UIStore]
};
