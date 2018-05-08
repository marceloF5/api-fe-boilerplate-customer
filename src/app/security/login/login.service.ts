import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IUser } from './user.model';

@Injectable()
export class LoginService {

  showMenuEmmiter = new EventEmitter<boolean>();
  user = new EventEmitter<IUser>();

  constructor(private http: HttpClient,
              private router: Router) { }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }
            
  navigateTo(path) {
    if(this.isLoggedIn()) {
      console.log('Entrou aqui')
      this.handlerLogout();
    } else {
      this.showMenuEmmiter.emit(true);
      this.router.navigate([`${path}`]);
    }
  }

  handlerLogin(email: string, password: string): Observable<IUser> {     
    return this.http.post<IUser>(`http://localhost:3001/api/token/create`,
                {email: email, password: password})    
  }

  handlerLogout() {
    this.showMenuEmmiter.emit(false);
    this.router.navigate(['/login']);
  }

}
