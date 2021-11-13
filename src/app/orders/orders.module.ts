import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdersComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class OrdersModule { }
