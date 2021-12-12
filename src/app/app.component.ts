import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppState } from './state';
import { UserState } from './state/user/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loggedInUser$: Observable<boolean> = of(false);
  constructor(
    private store: Store<AppState>
  ) { }
  ngOnInit(): void {
    this.loggedInUser$ = this.store.select('user').pipe(
      map((userState: UserState) => userState.isLoggedIn)
    );
  }
}
