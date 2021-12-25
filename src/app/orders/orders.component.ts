import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../state';
import { Order } from './../state/api-interface/order.interface';
import * as OrderFilterActions from './../state/orders-filter/orders-filter.actions';
import { loadOrders } from './../state/orders/orders.actions';
import { FilterObject } from './filter/filter.component';
import { initialFilterObject } from './services/orders-filter.service';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  filterObject$: Observable<FilterObject> = of(initialFilterObject);
  filterObject: FilterObject = initialFilterObject;
  orders: Order[] = [];
  allOrders: Order[] = [];
  constructor(
    private store: Store<AppState>,
    private ordersService: OrdersService
  ) { }
  ngOnInit(): void {
    this.store.dispatch(loadOrders());
    this.store.subscribe(({ filter, orders }) => {
      this.filterObject = filter.filter;
      this.allOrders = orders.orders;
      this.updateOrders();
    })
  }
  private updateOrders(): void { this.orders = this.ordersService.filterOrders(this.allOrders); }
  handleFilterEvent(filterObject: FilterObject): void { this.store.dispatch(OrderFilterActions.update({ payload: filterObject })); }
  handleFilterResetEvent(): void { this.store.dispatch(OrderFilterActions.reset()); }
}
