import { Order } from './../api-interface/order.interface';
import { createAction, props } from "@ngrx/store";


export const loadOrders = createAction('[ORDERS] LOAD');
export const ordersLoaded = createAction('[ORDERS] LOADED', props<{payload: Order[]}>())
