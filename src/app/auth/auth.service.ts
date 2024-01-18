import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { Observable, map } from 'rxjs';
import * as endpoints from './auth.endpoint';
import * as interfaces from './auth.interface';
import { RequesterService } from '../shared/services/requester.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http: HttpService, private requester: RequesterService) { }
  
  private getUser(token: any) {
    console.log(token,'token');
    
    if (!token) {
      return null;
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
  login(payload: interfaces.LoginPayload): Observable<any> {
    return this.http
      .post(endpoints.LOGIN, payload)
      .pipe(
        map((res: any) => {
          const access_token = res?.access_token;
          const refresh_token = res?.refresh_token;
          this.requester.loadUserData({ access_token });
          localStorage.setItem('access_token', access_token);
          this.user = this.getUser(access_token);
          return res;
        })
      );
  }

  registration(payload:any): Observable<any> {
    return this.http.post('auth/register', payload);
  }

}
