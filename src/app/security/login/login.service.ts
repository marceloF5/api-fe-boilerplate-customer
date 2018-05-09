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

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }
            
  navigateTo(path?: string) {
    if(!this.isLoggedIn()) {      
      this.handlerLogout(path);
    } else {
      this.logged.emit(true);
      this.router.navigate([`${path}`]);
    }
  }

  handlerLogin(email: string, password: string): Observable<IUser> {     
    return this.http.post<IUser>(`http://localhost:3001/api/token/create`,
                      {email: email, password: password})  
                    .do(user => this.user = user)
  }

  handlerLogout(path: string) {
    this.logged.emit(false);
    this.router.navigate([PATH_LOGIN, `/${path}`]);
  }

}
