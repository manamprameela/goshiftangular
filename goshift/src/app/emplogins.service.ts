import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Logins } from './Logins';

@Injectable({
  providedIn: 'root'
})
export class EmploginsService {

  private url: string = 'http://localhost:8080/sprmvcshift/logins';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  createLogins(logins: any): Observable<Logins> {
    console.log(logins);
    return this.http
      .post<Logins>(
        this.url + '/createLogins',
        JSON.stringify(logins),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
