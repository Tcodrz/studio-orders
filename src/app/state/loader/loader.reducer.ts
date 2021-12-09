import * as LoaderActions from './loader.actions';
import { createReducer, on, Action } from '@ngrx/store';


export interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false
};

const _loaderReducer = createReducer(
  initialState,
  on(LoaderActions.loading, () => {
    return { loading: true }
  }),
  on(LoaderActions.loaded, () => {
    return { loading: false }
  })
);

export function loaderReducer(state = initialState, action: Action): LoaderState {
  return _loaderReducer(state, action);
}
