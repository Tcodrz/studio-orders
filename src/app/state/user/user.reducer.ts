import * as UserActions from './user.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from './../api-interface/user.interface';


export interface UserState {
  user: User;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: {
    id: -1,
    name: '',
  },
  isLoggedIn: false
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.userLogin, (state, action) => {
    return {
      user: action.payload,
      isLoggedIn: true
    }
  }),
  on(UserActions.logout, (state, action) => {
    return initialState
  })
);

export function userReducer(state = initialState, action: Action) {
  return _userReducer(state, action);
}
