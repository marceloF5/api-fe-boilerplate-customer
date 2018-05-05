import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
