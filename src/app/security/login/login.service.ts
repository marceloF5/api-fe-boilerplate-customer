import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { IUser } from './user.model';

export const PATH_LOGIN = '/login';

@Injectable()
export class LoginService {

  logged = new EventEmitter<boolean>();
  user: IUser;

  constructor(private http: HttpClient,
              private router: Router) { }

  addLocalStorage(user) {
    localStorage.id = user.payload.id;
    localStorage.email = user.payload.email;
    localStorage.token = user.payload.token;
    localStorage.name = user.payload.name;
  }

  validateToken(token: string): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:3001/api/token/verify`,
                {token: token})
               .do(status => {
                  // if token expired and refreshingToken is true, so it's need refresh token
                  console.log(status)
                  if(!status) {
                      this.user = undefined;
                  }
               })
  }

  isLoggedIn(): boolean {
    // call function to verify token expired and check if user is using application.
    // this.validateToken(localStorage.token).subscribe();
    if (localStorage.id !== undefined) {
      return true;
    }
    return this.user !== undefined;
  }

  redirectToLogin(path) {
    localStorage.clear();
    this.logged.emit(false);
    this.router.navigate(['/login', btoa(path)])
  }

  handlerLogin(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3001/api/token/create`,
                      {email: email, password: password})
                    .do(user => {
                      this.logged.emit(true);
                      this.addLocalStorage(user);
                      this.user = user;
                    })
  }

  handlerLogout() {
    localStorage.clear();
    this.user = undefined;
    this.router.navigate([PATH_LOGIN]);
  }
}
