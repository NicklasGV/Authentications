import { AuthService } from 'src/app/services/auth.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
  import { Injectable, Injector } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      let authService = this.injector.get(AuthService)
      const token = localStorage.getItem('token');
  
      if (token) {
        req = req.clone({
          setHeaders: { 
            Authorization: `Bearer ${token}` 
          },
        });
      }
  
      return next.handle(req);
    }
  }
  