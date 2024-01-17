import {Injectable} from '@angular/core';
import * as Rx from "rxjs";
import * as endpoint from "./services.endpoint";
import {HttpService} from "./http.service";

const REQUESTER = 'kc-requester';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const WS_TOKEN = 'ws_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpService: HttpService) {
  }
  getTokenForSocket(): Rx.Observable<any> {
    return this.httpService.get(endpoint.GET_WS_TOKEN);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  getRequester(): any | null{
    return localStorage.getItem(REQUESTER);
  }

  saveAccessToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
  }
  
  saveRequester(requester: any): void {
    localStorage.setItem(REQUESTER, requester);
  }

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }
  removeRequester(): void {
    localStorage.removeItem(REQUESTER);
  }

}
