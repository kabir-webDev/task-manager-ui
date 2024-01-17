import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { AuthService } from 'src/app/auth/auth.service';
// import { environment } from '@env/environment';
// import { PermissionService } from '@shared/services/permission.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsInterceptor {
// export class ErrorsInterceptor implements HttpInterceptor {

  // constructor(private authService: AuthService, private permissionSvc: PermissionService, private router: Router) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request).pipe(catchError((res) => this.errorHandler(res)));
  // }

  // private errorHandler(response: any): Observable<any> {
  //   if (!environment.production) {
  //     console.log('errorHandler Response', response);
  //   }
  //   const status = response.status
  //   if (status === 401) {
  //     this.authService.logout();
  //     this.permissionSvc.loadUserPermissions([])
  //   }

  //   if (status === 403) {
  //     // this.authService.logout();
  //     // this.router.navigate(["/403"])
  //   }

  //   let error = response.error;
  //   if (error?.hasOwnProperty('error')) {
  //     error = error.error
  //   }
  //   let message = response.message;
  //   if (typeof error === 'object' && error !== null) {
  //     const keys = Object.keys(error);
  //     if (keys.some(item => item === 'message')) {
  //       message = error['message'];
  //     }
  //   } else if (typeof error === 'string') {
  //     message = error;
  //   }
  //   return throwError(() => ({ message, status, error }));
  // }
}
