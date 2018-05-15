import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';

import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from '../shared/messages/notification.service';

import { LoggedInGuard } from '../security/loggedin.guard'; 
import { LoggedOutGuard } from '../security/loggedout.guard';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './messages/modal.service';
import { AuthInterceptor } from '../security/auth.interceptor';

@NgModule({
  imports: [
    CommonModule, 
    MaterializeModule
  ],
  declarations: [SnackbarComponent, ModalComponent],
  exports: [
    SnackbarComponent, ModalComponent
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders{
    return {
        ngModule: SharedModule,
        providers: [
            LoggedInGuard,
            LoggedOutGuard,
            NotificationService,
            ModalService,
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
        ]
    }
}
}
