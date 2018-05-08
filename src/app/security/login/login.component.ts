import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  dataActions = new EventEmitter<MaterializeAction>();
  notifier = new EventEmitter<string>();

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {    
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  login() {          
    this.loginService.handlerLogin(this.loginForm.value.email, this.loginForm.value.password)
                     .subscribe(user => {
                        //console.log(user);
                        this.loginService.user.emit(user);
                        this.loginService.navigateTo(this.navigateTo)
                      }, res => {                        
                        this.notifier.emit(res.error.message)                        
                      })
  }

}
