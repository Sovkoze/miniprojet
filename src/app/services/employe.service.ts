import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private statusCode="";
 private employe:Employe[]|any;
 private baseUrl = "http://localhost:3000/employe";
  httpClient: any;
  redirectUrl: string|any;

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  createemploye(data: Employe): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/create-employe`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  updateemploye(data: Employe): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/update-employe`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  deleteemploye(data: Employe): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/delete-employe`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  getallemploye(): Observable<Employe[]|any> 
{
  return this.http.get(`${this.baseUrl}` +"/get-employe").pipe(retry(3),catchError(this.handleError));
}
}
