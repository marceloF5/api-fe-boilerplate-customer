import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface DeactivationGuarded {
  canDeactivate(nextState?: string): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class LoggedOutGuard implements CanDeactivate<DeactivationGuarded> {

  constructor() { } 

  canDeactivate(component: DeactivationGuarded): Observable<boolean> | Promise<boolean> | boolean { 
    console.log('ola')   
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}