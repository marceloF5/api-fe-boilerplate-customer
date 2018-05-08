import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './security/login/login.module';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [    
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    MaterializeModule,
    SharedModule,
    LoginModule.forRoot(),    
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
