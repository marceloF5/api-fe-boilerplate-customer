import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';

//import { LoginModule } from './../security/login/login.module';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule, MatInputModule,
    //LoginModule.forRoot()
  ],
  declarations: [],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatCheckboxModule, MatInputModule,
    //LoginModule
  ]
})
export class SharedModule { }
