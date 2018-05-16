import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { ProductsComponent } from './products.component';
import { LoggedOutGuard } from '../security/loggedout.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

const ROUTES: Routes = [
  {path: '', component: ProductsComponent, canDeactivate: [LoggedOutGuard]}
]

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
})
export class ProductsModule { 
}
