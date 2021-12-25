import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/state';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select('user').pipe(
        map(userState => {
          if (userState.isLoggedIn) {
            this.router.navigate(['orders']);
            return false;
          } else {
            return true;
          }
        })
      );
  }
}
