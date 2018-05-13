import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoggedInGuard } from './security/loggedin.guard'; 

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, canActivate: [LoggedInGuard]},     
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', loadChildren: './products/products.module#ProductsModule', 
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},    
    {path: '**', component: NotFoundComponent}    
];