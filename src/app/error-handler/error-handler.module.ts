import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlerComponent } from './error-handler.component';



@NgModule({
  declarations: [
    ErrorHandlerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorHandlerComponent
  ]
})
export class ErrorHandlerModule { }
