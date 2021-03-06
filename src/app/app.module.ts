import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './security/login/login.module';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserDetailComponent,
    NotFoundComponent,  
  ],
  imports: [    
    BrowserModule, 
    HttpModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    MaterializeModule,
    SharedModule.forRoot(),
    LoginModule.forRoot(),    
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules}),      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
