import { User } from './../api-interface/user.interface';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const userLogin = createAction('[USER] LOGIN', props<{payload: Partial<User>}>());
export const loginSuccess = createAction('[USER] LOGIN SUCCESS', props<{payload: User}>());
export const loginFailed = createAction('[USER] LOGIN FAILED');
export const logout = createAction('[USER] LOGOUT');

export const loadAllUsers =  createAction('[USERS] LOAD ALL');
export const usersLoaded = createAction('[USERS] LOADED', props<{payload: User[]}>());
