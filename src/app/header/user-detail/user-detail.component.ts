import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../security/login/login.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
   
  constructor(private loginService: LoginService) { }

  ngOnInit() {        
  }

  logout() {
    this.loginService.handlerLogout();
  }

}
