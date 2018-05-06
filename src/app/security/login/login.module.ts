import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule { 
  static forRoot(): ModuleWithProviders{
    return {
        ngModule: LoginModule,
        providers: [          
            LoginService            
        ]
    }
}
}