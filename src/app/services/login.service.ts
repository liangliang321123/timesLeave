import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import employee from '../components/models/employee';
import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // private handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Please key in correct id and password';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side errors
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Server-side errors
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }

  public login(username: string, password: string): Observable<employee> {
    return this.http.get<employee>(
      `${environment.apiHost}/api/Leave/AuthUser?username=${username}&password=${password}`
    );
  }
}
