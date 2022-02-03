import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class EmpregisterService {
  private url: string = 'http://localhost:8080/sprmvcshift/registration';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  getRegisterFromService(): Observable<Registration[]> {
    return this.http
      .get<Registration[]>(this.url + '/allreg')
      .pipe(retry(1), catchError(this.handleError));
  }

  getRegistration(rid: any): Observable<Registration> {
    return this.http
      .get<Registration>(this.url + '/getRegister/' + rid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createRegistration(registration: any): Observable<Registration> {
    console.log(registration);
    return this.http
      .post<Registration>(
        this.url + '/createRegister',
        JSON.stringify(registration),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateRegistration(registration: any): Observable<Registration> {
    console.log(registration);
    return this.http
      .put<Registration>(
        this.url + '/updateRegister',
        JSON.stringify(registration),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteRegistration(rid: number): Observable<Registration> {
    console.log(rid + ' from deleteRegistration');
    return this.http
      .delete<Registration>(this.url + '/deleteRegister/' + rid, this.httpOptions)
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
