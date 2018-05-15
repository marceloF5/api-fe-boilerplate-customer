import { Component, HostListener, Input, OnInit, EventEmitter } from '@angular/core';
import { ModalService } from '../messages/modal.service';
import { MaterializeAction } from 'angular2-materialize';


/**
 * ModalComponent - This class represents the modal component.
 * @requires Component
 */

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent implements OnInit {

  isOpen: boolean = false;

  modalActions = new EventEmitter<MaterializeAction>();
  //message: string = 'Deseja sair da Aplicação?';

  //@Input() closebtn: boolean;
  @Input() modalId: string;
  @Input() title: string;
  @Input() message: string;  
  @Input() blocking: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  openModal() {  
    this.modalActions.emit({ action:"modal", params:['open'] });     
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  choose(choice: boolean): void {
    this.modalService.navigateAwaySelection$.next(choice);
  }

}