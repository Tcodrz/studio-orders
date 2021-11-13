import { loading } from './../../state/loader/loader.actions';
import { OrdersModule } from './../orders.module';
import { loadOrders } from './../../state/orders/orders.actions';
import { map, Observable, of } from 'rxjs';
import { AppState } from 'src/app/state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/state/api-interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private _orders$: Observable<Order[]> = of([]);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadOrders());
    this._orders$ = this.store.select('orders').pipe(map(orderState => orderState.orders));
  }

  get orders$() { return this._orders$ }
}
