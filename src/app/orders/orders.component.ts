import { FilterObject } from './filter/filter.component';
import { Order } from './../state/api-interface/order.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]> = this.ordersService.orders$;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {

  }

  handleFilterEvent(filterObject: FilterObject): void {
    console.log(filterObject);
  }

}
