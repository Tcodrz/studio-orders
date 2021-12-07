import * as OrdersActions from './orders.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Order } from './../api-interface/order.interface';


export interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: []
};

const _orderReducer = createReducer(
  initialState,
  on(OrdersActions.ordersLoaded, (state, action) => {
    return {
      orders: action.payload
    }
  })
);

export function orderReducer(state = initialState, action: Action): OrderState {
  return _orderReducer(state, action);
}
