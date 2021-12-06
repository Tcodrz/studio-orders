import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../state';
import { Order } from './../state/api-interface/order.interface';
import * as OrderFilterActions from './../state/orders-filter/orders-filter.actions';
import { loadOrders } from './../state/orders/orders.actions';
import { FilterObject } from './filter/filter.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders$: Observable<Order[]> = this.store.select('orders').pipe(map(ordersState => ordersState.orders));
  filterObject$: Observable<FilterObject> = this.store.select('filter').pipe(map(filterState => filterState.filter));

  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadOrders());
  }
  handleFilterEvent(filterObject: FilterObject): void {
    this.store.dispatch(OrderFilterActions.update({ payload: filterObject }));
  }
  handleFilterResetEvent(): void {
    this.store.dispatch(OrderFilterActions.reset());
  }
}
