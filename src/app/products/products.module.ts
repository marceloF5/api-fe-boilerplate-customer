import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { ProductsComponent } from './products.component';

const ROUTES: Routes = [
  {path: '', component: ProductsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
