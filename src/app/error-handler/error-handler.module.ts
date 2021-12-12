import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeModule } from './../prime/prime.module';
import { ErrorHandlerComponent } from './error-handler.component';




@NgModule({
  declarations: [
    ErrorHandlerComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    ErrorHandlerComponent
  ]
})
export class ErrorHandlerModule { }
