import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',  
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
