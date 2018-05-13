import { Component, HostListener, Input, OnInit, EventEmitter } from '@angular/core';
import { ModalService } from '../messages/modal.service';
import { MaterializeAction } from 'angular2-materialize';


/**
 * ModalComponent - This class represents the modal component.
 * @requires Component
 */

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  isOpen: boolean = false;

  modalActions = new EventEmitter<MaterializeAction>();
  message: string = 'Deseja sair da Aplicação?';

  openModal() {
    console.log('abrindo modal')
    this.modalActions.emit({ action:"modal", params:['open'] });     
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  @Input() closebtn: boolean;
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking: boolean;
  @HostListener('document:keyup', ['$event'])
  /**
  * keyup - Checks keys entered for the 'esc' key, attached to hostlistener
  */
  keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }

  constructor(private modalService: ModalService) { }

  /**
  * ngOnInit - Initiated when component loads
  */
  ngOnInit() {
    this.modalService.registerModal(this);
  }

  /**
  * close - Closes the selected modal
  */
  close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

  choose(choice: boolean): void {
    this.modalService.navigateAwaySelection$.next(choice);
  }

}

/*import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalActions = new EventEmitter<MaterializeAction>();
  message: string = 'Deseja sair da Aplicação?';
  
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });     
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

}*/
