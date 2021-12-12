import { PrimeModule } from './../prime/prime.module';
import { OrderStatusPipe } from './../core/pipes/order-status.pipe';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    SharedModule,
    PrimeModule
  ]
})
export class OrdersModule { }
