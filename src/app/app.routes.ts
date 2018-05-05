import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'
import { LoginComponent } from './security/login/login.component';

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},     
    {path: 'login', component: LoginComponent},
    {path: 'products', loadChildren: './products/products.module#ProductsModule'},        
];