import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DeactivationGuarded } from '../security/loggedout.guard';
import { NotificationService } from '../shared/messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { ModalService } from '../shared/messages/modal.service';
import { ProductsService } from './products.service';
import { IProduct } from './product/product.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',  
})
export class ProductsComponent implements OnInit, DeactivationGuarded  {

  products: IProduct[] = [];
  
  constructor(private productsService: ProductsService,
              private loginService: LoginService,                            
              private modalService: ModalService,
              private notificationService: NotificationService) { }

  ngOnInit() { 
    this.productsService
      .handlerGetAllProducts()
      .subscribe( 
        products => this.products = products,
        response => {
          if (response.status === 401) {
            this.loginService.redirectToLogin('products');
          }
          this.notificationService.notify(response.error.message)
        } 
      )
  }

  isProductCompleted(): boolean {    
    return false;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {     
    if (this.products.length !== 0) {
      this.modalService.open('default-modal');
      return this.modalService.navigateAwaySelection$;
    } else {
      return true;
    }
  }
}
