import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    const options = { params, headers };
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, options);
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const options = { headers };
    return this.http.delete<T>(`${this.baseUrl}/${url}`, options);
  }
}
