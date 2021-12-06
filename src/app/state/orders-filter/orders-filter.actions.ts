import { FilterObject } from './../../orders/filter/filter.component';
import { createAction, props } from '@ngrx/store';


export const update = createAction('[FILTER] UPDATE', props<{ payload: FilterObject}>());
export const reset = createAction('[FILTER] RESET');
