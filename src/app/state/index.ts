import { ActionReducerMap } from '@ngrx/store';
import { errorReducer, ErrorState } from './error/error.reducer';
import { loaderReducer, LoaderState } from './loader/loader.reducer';
import { orderReducer, OrderState } from './orders/orders.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  orders: OrderState;
  user: UserState;
  error: ErrorState;
  loader: LoaderState
}


export const reducers: ActionReducerMap<AppState> = {
  orders: orderReducer,
  user: userReducer,
  error: errorReducer,
  loader: loaderReducer
}
