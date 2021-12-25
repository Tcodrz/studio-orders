import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderStatusPipe } from './../core/pipes/order-status.pipe';
import { PrimeModule } from './../prime/prime.module';
import { SharedModule } from './../shared/shared.module';
import { ChipsComponent } from './filter/chips/chips.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    OrdersComponent,
    FilterComponent,
    ChipsComponent,
    ListComponent,
    OrderStatusPipe
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeModule
  ]
})
export class OrdersModule { }
