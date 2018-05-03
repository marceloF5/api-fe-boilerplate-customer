import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component'

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},  
    {path: 'products', loadChildren: './products/products.module#ProductsModule'},        
];