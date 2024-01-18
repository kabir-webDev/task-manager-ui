import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpService } from './http.service';

import * as endpoints from '../../auth/auth.endpoint';
import { jwtDecode } from 'jwt-decode';

const ACCESS_TOKEN = 'access_token';
const KC_REQUESTER = "kc-requester";

interface LoginData {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private _userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  userData$: Observable<any> = this._userDataSubject.asObservable();

  timeoutId: any;

  constructor(private router: Router, private snackbar: MatSnackBar, private http: HttpService) {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      const access_token = (<string>localStorage.getItem(ACCESS_TOKEN));
      this.loadUserData({ access_token })
    }
  }

  loadUserData(data: LoginData): void {
    this._userDataSubject.next({
      access_token: data.access_token,
      userData: this.getUserDataFromToken(data.access_token)
    });
    // if (data?.refresh_token) {
    //   this.tokenExpireSetTimeout()
    // }
  }


  get userDataSnapshot(): any {
    return this._userDataSubject.value;
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(KC_REQUESTER);
    this._userDataSubject.next(null);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.router.navigate(['/auth/login'])
  }

  get isAuthenticated(): boolean {
    const access_token = this._userDataSubject.value?.access_token;
    if (!access_token) {
      return false
    }
    return true;
  }

  isAuthTokenValid(accessToken: string, _reduceExpiredSeconds: number = 0): boolean {
    const decoded: any = jwtDecode(accessToken);
    // default decoded exp format is second
    const expMilSecond: number = (decoded?.exp * 1000) - Math.floor(1000 * _reduceExpiredSeconds); // milliseconds
    const currentTime = Date.now(); // milliseconds
    return expMilSecond > currentTime;
  }

  getUserDataFromToken(token: string): any {
    const decoded: any = jwtDecode(token);
    return decoded;
  }

  get getUserCompanyId(): string {
    return this._userDataSubject.value?.userData?.companyId
  }

  getTokenExpireTime(token: string): any {
    const decoded: any = jwtDecode(token);
    return decoded?.exp
  }

  // tokenExpireSetTimeout(): void {
  //   if (this.timeoutId) {
  //     clearTimeout(this.timeoutId)
  //   }
  //   const refreshToken = this._userDataSubject.value?.refresh_token;
  //   const accessToken = this._userDataSubject.value?.access_token;
  //   if (refreshToken) {
  //     const expireTimeForAccessToken = this.getTokenExpireTime(accessToken);
  //     const duration = (expireTimeForAccessToken * 1000) - new Date().getTime();
  //     this.timeoutId = setTimeout(() => {
  //       this.getNewByRefreshToken().subscribe();
  //     }, duration)
  //   }
  // }

  get isSuperAdmin(): boolean {
    return this.userDataSnapshot?.userData?.role === "SUPER_ADMIN"
  }

  get isAdmin(): boolean {
    return this.userDataSnapshot?.userData?.role === "ADMIN"
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    const currentUser = this.userDataSnapshot;
    const _authorities: string[] = typeof authorities === "string" ? [authorities] : authorities
    return _authorities.some(r => currentUser.authorities.includes(r));
  }

  // API
  // getNewByRefreshToken(): Observable<any> {
  //   const refresh_token = this.userDataSnapshot?.refresh_token;
  //   const expireTime = this.getTokenExpireTime(refresh_token);

  //   if (new Date().getTime() > (expireTime * 1000)) {
  //     this.snackbar.open('Your session has been expired! Please Sign In Again.', "close", { duration: 5000 });
  //     this.logout();
  //     return of(false)
  //   }

  //   return this.http.authPost(endpoints.REFRESH_TOKEN, {
  //     refresh_token: refresh_token
  //   }, { grant_type: 'refresh_token' }).pipe(
  //     map((res: any) => {
  //       const access_token = res?.data?.access_token;
  //       const refresh_token = res?.data?.refresh_token;
  //       this.loadUserData({ access_token, refresh_token });
  //       localStorage.setItem(ACCESS_TOKEN, access_token);
  //       localStorage.setItem(REFRESH_TOKEN, refresh_token);
  //       return res
  //     })
  //   )
  // }
}
