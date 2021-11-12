import { UserState } from './../state/user/user.reducer';
import { User } from './../state/api-interface/user.interface';
import { Observable, of, map, Subscription } from 'rxjs';
import { userLogin, loadAllUsers } from './../state/user/user.actions';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  users$: Observable<User[]> = of([]);
  loginForm: FormGroup;
  loginError: boolean = false;
  userSubscription: Subscription = new Subscription();

  @HostListener('submit') onsubmit() {
    this.users$.subscribe(users => {

      const { username, password } = this.loginForm.value;
      const user = users.find(u => u.name.toLowerCase() === username.toLowerCase());

      if (user) {
        this.store.dispatch(userLogin({
          payload :
          {
             name: username,
             password: password ,
             id: user.id
          }
        }
        ))
      } else {
        this.loginError = true;
      }

    }).unsubscribe();
  }


  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  ngOnInit(): void {

    this.store.dispatch(loadAllUsers());
    this.users$ =this.store.select('user').pipe(map(state => state.users));

    this.userSubscription = this.store.select('user')
    .subscribe((userState: UserState) => {
      if (userState.user.id > 0) {
        this.router.navigate(['orders']);
      }
    });
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
