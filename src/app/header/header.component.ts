import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { LoginService } from '../security/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',  
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;  
  dropdownActions = new EventEmitter<MaterializeAction>();

  constructor(private loginService: LoginService) { }

  ngOnInit() {    
    this.dropdownActions.emit({ action: 'dropdown', params: null });
    this.loginService.logged.subscribe(logged => this.showMenu = logged);    
  }

  logout() {
    this.loginService.handlerLogout();
  }
}
