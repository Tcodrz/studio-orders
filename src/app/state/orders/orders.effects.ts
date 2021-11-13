import { AppState } from 'src/app/state';
import { Store } from '@ngrx/store';
import { loaded, loading } from './../loader/loader.actions';
import { Order } from './../api-interface/order.interface';
import { ApiService } from './../services/api.service';
import { loadOrders, ordersLoaded } from './orders.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, tap } from 'rxjs';


@Injectable()
export class OrdersEffects {

  loadOrders$ = createEffect(() => this.actions$.pipe(
    ofType(loadOrders),
    mergeMap(() => this.api.getAllOrders().pipe(
      map((orders: Order[]) => {
        return ordersLoaded({payload: orders})
      }),
      catchError(() => EMPTY)
      )),
  ))


  constructor( private actions$: Actions, private api: ApiService ) { }
}
