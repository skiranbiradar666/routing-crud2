import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const modifiedReq = request.clone({
      setHeaders : {
        "Auth" : "Token from LS"
      }
    })
    return next.handle(modifiedReq).pipe(
      finalize(() =>{})
    )
  }
}
