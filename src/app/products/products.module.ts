import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

const ROUTES: Routes = [
  {path: '', component: ProductsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
