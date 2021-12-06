import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ChipsComponent } from './filter/chips/chips.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    OrdersComponent,
    FilterComponent,
    ChipsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class OrdersModule { }
