import { DateService } from './../../shared/services/date.service';
import { createReducer, on, Action } from '@ngrx/store';
import { FilterObject } from './../../orders/filter/filter.component';
import * as FilterActions from './orders-filter.actions';


export interface FilterState {
  filter: FilterObject;
}

export const initialState: FilterState = {
  filter: {
    fromDate: DateService.getDate('yyyymmdd', { monthStart: true }),
    toDate: DateService.getDate('yyyymmdd', { monthEnd: true }),
    fromPrice: null,
    toPrice: null,
    orderNumber: '',
    advertiser: '',
    customer: '',
    narrator: ''
  }
}

const _filterReducer = createReducer(
  initialState,
  on(FilterActions.update, (state, action) => {
    return {
      filter: action.payload
    }
  }),
  on(FilterActions.reset, () => {
    return initialState
  })
);


export function ordersFilterReducer(state = initialState, action: Action): FilterState {
  return _filterReducer(state, action);
}
