import * as UserActions from './user.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from './../api-interface/user.interface';


export interface UserState {
  users: User[];
  user: User;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  users: [],
  user: {
    id: -1,
    name: 'INITIAL USER'
  },
  isLoggedIn: false
};

const _userReducer = createReducer(
  initialState,
  on(UserActions.usersLoaded, (state, action) => {
    return {
      users: action.payload,
      user: state.user,
      isLoggedIn: state.isLoggedIn
    }
  }),
  on(UserActions.loginSuccess, (state, action) => {
    return {
      users: state.users,
      user: action.payload,
      isLoggedIn: true
    }
  })
);

export function userReducer(state = initialState, action: Action) {
  return _userReducer(state, action);
}
