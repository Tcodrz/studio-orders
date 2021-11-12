import { User } from './../api-interface/user.interface';
import { map, mergeMap, catchError, EMPTY } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { loadAllUsers, usersLoaded, userLogin, loginSuccess, loginFailed } from './user.actions';
import { ApiService } from './../services/api.service';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";


@Injectable()
export class UserEffects {

  loadAllUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllUsers),
    mergeMap(() => this.api.getAllUsers().pipe(
      map(users => (usersLoaded({payload: users}))),
      catchError(() => EMPTY)
    ))
  ));

  userLogin$ = createEffect(() => this.actions$.pipe(
    ofType(userLogin),
    mergeMap((action) => this.api.userLogin(action.payload).pipe(
      map((user) =>  user ? loginSuccess({payload: user}) : loginFailed()),
      catchError(() => EMPTY)
    ))
  ))


  constructor(private actions$: Actions, private api: ApiService) {}
}
