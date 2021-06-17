import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Abscence } from '../models/abscence';

@Injectable({
  providedIn: 'root'
})
export class AbscenceService {

  private statusCode="";
 private abscence:Abscence[]|any;
 private baseUrl = "http://localhost:3000/abscence";
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
  createabscence(data: Abscence): Observable<any> 
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  let API_URL = `${this.baseUrl}/create-abscence`;
  return this.http.post(API_URL, data,options)
    .pipe(
      catchError(this.handleError)
    )
  }
  updateabscence(data: Abscence): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/update-abscence`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  deleteabscence(data: Abscence): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/delete-abscence`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  getallabscence(): Observable<Abscence[]|any> 
{
  return this.http.get(`${this.baseUrl}` +"/get-abscence").pipe(retry(3),catchError(this.handleError));
}
getallabscenceId(id:number|any): Observable<Abscence[]|any> 
{
  let headers =  new HttpHeaders();
headers.append('Content-Type', 'application/json');
let params = new HttpParams();
params.append("id_employe", id)
  return this.http.get(`${this.baseUrl}` +"/get-abscence-id?id_employe="+id, { headers: headers, params: params }).pipe(retry(3),catchError(this.handleError));
}

getsoldeabscence(): Observable<Abscence[]|any> 
{
  const data='';
  return this.http.get(`${this.baseUrl}` +"/get-solde-abscence").pipe(retry(3),catchError(this.handleError));
}
getsoldeabscence_foruser(id:number|any): Observable<Abscence[]|any> 
{
let headers =  new HttpHeaders();
headers.append('Content-Type', 'application/json');
let params = new HttpParams();
params.append("id_employe", id)

return this.http.get(`${this.baseUrl}` +"/get-solde-abscence-id?id_employe="+id, { headers: headers, params: params })
}
}
