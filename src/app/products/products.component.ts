import { Component, OnInit, EventEmitter } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',  
})
export class ProductsComponent implements OnInit {
    
  constructor() { }

  ngOnInit() { 
  }

}
