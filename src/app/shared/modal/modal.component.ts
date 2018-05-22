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

  @Input() modalId: string;
  @Input() blocking: boolean;

  title: string;
  message: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  openModal(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  choose(choice: boolean): void {
    this.modalService.navigateAwaySelection$.next(choice);
  }

}
