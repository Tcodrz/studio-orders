import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { CacheService } from 'src/app/state/services/cache.service';
import { User } from './../../state/api-interface/user.interface';
import { ApiService } from './../../state/services/api.service';
import { userLogin } from './../../state/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private store: Store<AppState>,
    private api: ApiService,
    private cache: CacheService,
    private router: Router
  ) { }

  submitLogin(user: Partial<User>) {
    this.api.authenticateUser(user).subscribe(authUser => {
      if (authUser) {
        this.store.dispatch(userLogin({payload: authUser}));
        this.store.select('user').subscribe(state => {
          this.cache.setItem<Partial<User>>('user', state.user);
          this.router.navigate(['orders']);
        })
      }
    })
  }
}
