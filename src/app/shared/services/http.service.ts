import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = environment.v1ApiEndPoint;
  }

  get(url: string, queryParams?: any, responseType?: any): Observable<any> {
    const queryParameters = queryParams ? queryParams : {};
    const responseTypes = responseType ? responseType : null;

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: queryParameters,
      responseType: responseTypes
    };

    return this.http.get(this.apiBaseUrl + url, httpOptions)
  }

  post(url: string, data: any, queryParams?: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: queryParams || {}
    };
    const body = JSON.stringify(data);
    return this.http.post(this.apiBaseUrl + url, body, httpOptions)
  }

  // put(url: string, data: any, queryParams?: any): Observable<any> {
  //   const queryParameters = queryParams ? queryParams : {};
  //   let httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     params: queryParameters
  //   };
  //   const body = JSON.stringify(data);
  //   return this.http.put(this.apiBaseUrl + url, body, httpOptions)
  // }

  // delete(url: string, queryParams?: any): Observable<any> {
  //   const queryParameters = queryParams ? queryParams : {};
  //   let httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     params: queryParameters
  //   };
  //   return this.http.delete(this.apiBaseUrl + url, httpOptions);
  // }

  // upload(url: string, payload: any): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({ Accept: 'application/json' }),
  //   };
  //   const body = JSON.stringify(payload);
  //   return this.http.post(this.apiBaseUrl + url, body, httpOptions);
  // }
}
