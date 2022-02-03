import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Goshift } from './Goshift';

@Injectable({
  providedIn: 'root'
})
export class EmpshiftService {
  private url: string = 'http://localhost:8080/sprmvcshift/goshift';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  getShiftFromService(): Observable<Goshift[]> {
    return this.http
      .get<Goshift[]>(this.url + '/allshift')
      .pipe(retry(1), catchError(this.handleError));
  }

  getGoshift(sid: any): Observable<Goshift> {
    return this.http
      .get<Goshift>(this.url + '/getShift/' + sid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createGoshift(goshift: any): Observable<Goshift> {
    console.log(goshift);
    return this.http
      .post<Goshift>(
        this.url + '/createGoshift',
        JSON.stringify(goshift),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateGoshift(goshift: any): Observable<Goshift> {
    console.log(goshift);
    return this.http
      .put<Goshift>(
        this.url + '/updateShift',
        JSON.stringify(goshift),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteGoshift(sid: number): Observable<Goshift> {
    console.log(sid + ' from deleteGoshift()');
    return this.http
      .delete<Goshift>(this.url + '/deleteShift/' + sid, this.httpOptions)
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
