import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../state';
import { Order } from './../state/api-interface/order.interface';
import * as OrderFilterActions from './../state/orders-filter/orders-filter.actions';
import { loadOrders } from './../state/orders/orders.actions';
import { FilterObject } from './filter/filter.component';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  filterObject$: Observable<FilterObject> = this.store.select('filter').pipe(map(filterState => filterState.filter));
  orders: Order[] = [];
  constructor(
    private store: Store<AppState>,
    private ordersService: OrdersService
  ) { }
  ngOnInit(): void {
    this.store.dispatch(loadOrders());
    this.getOrders();
  }
  getOrders(): void {
    this.store.pipe(
      select('orders'),
      map(state => state.orders)
    ).subscribe(orders => this.orders = this.ordersService.filterOrders(orders));
  }
  handleFilterEvent(filterObject: FilterObject): void {
    this.store.dispatch(OrderFilterActions.update({ payload: filterObject }));
    this.getOrders();
  }
  handleFilterResetEvent(): void {
    this.store.dispatch(OrderFilterActions.reset());
    this.getOrders();
  }
}
