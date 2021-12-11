import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorHandlerComponent } from './error-handler.component';




@NgModule({
  declarations: [
    ErrorHandlerComponent,
  ],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    ErrorHandlerComponent
  ]
})
export class ErrorHandlerModule { }
