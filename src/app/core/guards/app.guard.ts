import { User } from '../../state/api-interface/user.interface';
import { userLogin } from '../../state/user/user.actions';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { CacheService } from 'src/app/state/services/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private cache: CacheService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.cache.getItem<User>('user');
    return this.store.select('user')
      .pipe(
        map((userState) => {
          if (user && !userState.isLoggedIn) {
            this.store.dispatch(userLogin({ payload: user }));
            return true;
          } else if (userState.isLoggedIn) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        })
      )
  }

}
