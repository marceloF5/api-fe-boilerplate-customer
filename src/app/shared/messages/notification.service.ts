import { Injectable, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { Subject } from 'rxjs/Subject';

import { ModalComponent } from '../modal/modal.component';

@Injectable()
export class NotificationService {

  navigateAwaySelection$: Subject<boolean> = new Subject<boolean>();

  notifier = new EventEmitter<string>();
  //private modals: Array<ModalComponent>;

  constructor() { }

  notify(message: string) {
    this.notifier.emit(message);
  }   

}
