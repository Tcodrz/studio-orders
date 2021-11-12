import { UserState } from './state/user/user.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppState } from './state';
import { Order } from './state/api-interface/order.interface';
import { loadOrders } from './state/orders/orders.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  orders$: Observable<Order[]> = of([]);
  loggedInUser$: Observable<boolean> = of(false);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
    this.orders$ = this.store.select('orders').pipe(map(state => state.orders));
    this.loggedInUser$ = this.store.select('user').pipe(
      map((userState: UserState) => userState.isLoggedIn)
    )
  }


}
