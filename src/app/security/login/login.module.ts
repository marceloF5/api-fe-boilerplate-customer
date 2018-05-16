import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    SharedModule
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
