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

  private validateToken(token: string): Observable<boolean> {
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
    if (localStorage.id !== undefined || this.user !== undefined) {      
      this.logged.emit(true);
      return true;
    }
    return false;
  }

  redirectToLogin(path) {
    this.handlerDelLocalStorage();    
    this.router.navigate(['/login', btoa(path)])
  }

  private handlerAddLocalStorage(user) {
    this.user = user;
    this.logged.emit(true);

    localStorage.setItem('id', user.payload.id)
    localStorage.setItem('email', user.payload.email)
    localStorage.setItem('token', user.payload.token)
    localStorage.setItem('name', user.payload.name)    
  }

  private handlerDelLocalStorage() {  
    this.user = undefined;  
    this.logged.emit(false);

    localStorage.clear();
  }

  handlerLogin(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3001/api/token/create`,
                      {email: email, password: password})
                    .do(user => {                    
                      this.handlerAddLocalStorage(user);                      
                    })
  }

  handlerLogout() {
    this.handlerDelLocalStorage();    
    this.router.navigate([PATH_LOGIN]);
  }
}
