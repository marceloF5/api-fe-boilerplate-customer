import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction, toast } from "angular2-materialize";
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './login.service';
import { IUser } from './user.model';
import { NotificationService } from '../../shared/messages/notification.service';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {        
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
    this.loginService.logged.emit(false);
  }

  login() {          
    this.loginService.handlerLogin(this.loginForm.value.email, this.loginForm.value.password)
                     .subscribe(
                        user => this.notificationService.notify(`Welcome ${user.payload.name}`),                          
                        response => {//HttpErrorResponse  
                          if(response.error.message !== undefined) {
                            this.notificationService.notify(response.error.message)                
                          } else {
                            this.notificationService.notify(`Application temporarily out.`)                
                          }                          
                        },
                        () => {
                          this.loginService.navigateTo(this.navigateTo)
                          //this.router.navigate([this.navigateTo])
                        })
  }

}
