import { Component, OnInit, AfterContentInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterContentInit {

  loginForm: FormGroup;
  input: any;

  dataActions = new EventEmitter<MaterializeAction>();

  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {    
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

  }

  ngAfterContentInit() {
    //this.input = this.control;
    /*if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }*/
  }

  login() {     
    this.loginService.handleLogin();
  }

  validade(): boolean {  
    console.log(this.loginForm.invalid);
    return this.loginForm.invalid;
  }

}
