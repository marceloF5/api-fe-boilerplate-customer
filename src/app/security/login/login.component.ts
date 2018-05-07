import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

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

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
