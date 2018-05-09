import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from '../shared/messages/notification.service';

import { LoggedInGuard } from '../security/loggedin.guard'; 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SnackbarComponent],
  exports: [
    SnackbarComponent
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders{
    return {
        ngModule: SharedModule,
        providers: [
            LoggedInGuard,
            NotificationService
        ]
    }
}
}
