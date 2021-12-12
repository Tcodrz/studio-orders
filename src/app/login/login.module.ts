import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './../prime/prime.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    PrimeModule,
  ]
})
export class LoginModule { }
