import { Component, OnInit, EventEmitter } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',  
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;  
  dropdownActions = new EventEmitter<MaterializeAction>();


  constructor(private loginService: LoginService) { }

  ngOnInit() {    
    this.dropdownActions.emit({action: 'dropdown', params: null});
    this.loginService.showMenuEmmiter.subscribe(showMenu => this.showMenu = showMenu);
  }
}
