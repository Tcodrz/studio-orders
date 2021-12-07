import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Order } from './../api-interface/order.interface';
import { ApiService } from './../services/api.service';
import { loadOrders, ordersLoaded } from './orders.actions';


@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() => this.actions$.pipe(
    ofType(loadOrders),
    mergeMap(() => this.api.getAllOrders().pipe(
      map((orders: Order[]) => {
        return ordersLoaded({ payload: orders })
      }),
      catchError(() => EMPTY)
    )),
  ))

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
