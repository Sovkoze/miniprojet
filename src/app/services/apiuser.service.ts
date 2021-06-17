import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { catchError, map, retry } from 'rxjs/operators';
import {  of } from 'rxjs';
import { NULL_EXPR, THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {


  private statusCode="";
 private utilisateur:Utilisateur[]|any;
 @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
 private baseUrl = "http://localhost:3000/utilisateur";
  httpClient: any;
  users:Utilisateur[]|any;
  redirectUrl: string|any;
  data:Utilisateur|any;
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
  createUtilisateur(data: Utilisateur): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/create-utilisateur`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  updateUtilisateur(data: Utilisateur): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/update-utilisateur`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  deleteUtilisateur(data: Utilisateur): Observable<any> 
  {
    let API_URL = `${this.baseUrl}/delete-utilisateur`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  AuthUtilisateur(data:Utilisateur):Observable<Utilisateur|any>|any
  {
    this.getusers().subscribe((users:Utilisateur[]|any)=>
    { 
      this.users=users;
      this.setusers(users)
    
    },
     (err) => {
       console.log(err);
   });
   console.log("fin"+this.users);
   return;
  }


getusers():Observable<Utilisateur|any>
{
return this.http.get(`${this.baseUrl}` +"/get-utilisateur").pipe(retry(3),catchError(this.handleError));
}

getoneuser(id:number):Observable<Utilisateur>|any
{
  this.getusers().subscribe((users:Utilisateur[]|any)=>
    { 
      this.users=users;
      this.setusers(users)
     // console.log(users)
      const utilisateurs:Utilisateur[]|any=this.users.filter((a:Utilisateur|any) => a.id==id);
     // console.log(utilisateurs[0])
     return of(utilisateurs[0]);
    },
     (err) => {
       console.log(err);
   });

}

//token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
  setusers(users:Utilisateur[])
  {
    this.users+users;
  }
  
}
