import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from "../../auth/auth.service";
import { switchMap, take } from "rxjs/operators";

@Injectable()
export class MainHttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    // private authService: AuthService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (request.url.indexOf('/refresh-token') !== -1) {
    //   return next.handle(request);
    // }
    // const data = this.authService.userDataSnapshot;
    // const accessToken = data?.access_token;
    // if (accessToken) {
    //   if (this.authService.isAuthTokenValid(accessToken)) {
    //     let modifiedReq = request.clone({
    //       headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
    //     });
    //     return next.handle(modifiedReq)
    //   }
    //   return this.authService.getNewByRefreshToken()
    //     .pipe(
    //       take(1),
    //       switchMap((res: any) => {
    //         console.log("refresh token switchMap: ", res)
    //         let modifiedReq = request.clone({
    //           headers: request.headers.append('Authorization', `Bearer ${res?.data?.accessToken}`)
    //         });
    //         return next.handle(modifiedReq)
    //       })
    //     )
    // }
    return next.handle(request)
  }
}
