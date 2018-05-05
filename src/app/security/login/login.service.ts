import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  handleLogin() {    
    this.showMenuEmmiter.emit(true);
    this.router.navigate(['/'])
  }

}
