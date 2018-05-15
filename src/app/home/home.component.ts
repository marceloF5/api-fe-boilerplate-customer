import { Component, OnInit } from '@angular/core';
import { LoginService } from '../security/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {        
  }

  testeReq() {
    let usersFora;
    this.loginService.handlerProducts()
      .subscribe(
        users => {
          console.log(users);
          usersFora = users;
        },
        response => {//HttpErrorResponse  
          console.log(response);                               
        });  
  }
}
