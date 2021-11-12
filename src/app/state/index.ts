import { userReducer, UserState } from './user/user.reducer';
import { ActionReducerMap, createReducer } from '@ngrx/store';
import { orderReducer, OrderState } from './orders/orders.reducer';

export interface AppState {
  orders: OrderState;
  user: UserState;
}


export const reducers: ActionReducerMap<AppState> = {
  orders: orderReducer,
  user: userReducer
}
