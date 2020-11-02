import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  constructor(protected httpClient: HttpClient, protected url: string) {}

  protected changeUrl(newUrl: string) {
    this.url = newUrl;
  }

  // GET
  protected get(
    endpoint: string,
    errorMsg: string,
    config?: {}
  ): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/${endpoint}`, config).pipe(
      map((response: any) => {
        if (response.status == 500) {
          throw response.payload;
        }
        if (response.status == 200) {
          return response.payload;
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          console.log(errorMsg);
          // return throwError(errorMsg);
        } else {
          return throwError(error);
        }
      })
    );
  }
  // POST
  protected post(endpoint: string, errorMsg: string, datos: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/${endpoint}`, datos).pipe(
      map((response: any) => {
        if (response.status == 500) {
          throw response.payload;
        }
        if (response.status == 200) {
          return response.payload;
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          console.log(errorMsg);
          // return throwError(errorMsg);
        } else {
          return throwError(error);
        }
      })
    );
  }
}
