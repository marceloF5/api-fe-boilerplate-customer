import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DeactivationGuarded } from '../security/loggedout.guard';
import { NotificationService } from '../shared/messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { ModalService } from '../shared/messages/modal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',  
})
export class ProductsComponent implements OnInit, DeactivationGuarded  {
  
  constructor(private loginService: LoginService,
              private modalService: ModalService) { }

  ngOnInit() { }

  isProductCompleted(): boolean {
    return false;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> { 
    this.modalService.open('default-modal');
    return this.modalService.navigateAwaySelection$;
  }
}
