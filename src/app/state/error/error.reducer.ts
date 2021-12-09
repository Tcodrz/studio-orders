import * as ErrorActions from './error.actions';
import { createReducer, Action, on } from '@ngrx/store';


export interface ErrorState {
  hasError: boolean;
  message: string;
}

const initialState: ErrorState = {
  hasError: false,
  message: ''
};

const _errorReducer = createReducer(
  initialState,
  on(ErrorActions.emitError, (state, action) => {
    return  {
      hasError: true,
      message: `${action.payload.code } - ${action.payload.message}`
    }
  }),
  on(ErrorActions.releaseError, () => {
    return {
      hasError: false,
      message: ''
    }
  })
);

export function errorReducer(state = initialState, action: Action): ErrorState {
  return _errorReducer(state, action);
}
