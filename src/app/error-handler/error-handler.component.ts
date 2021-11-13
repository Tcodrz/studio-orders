import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { releaseError } from './../state/error/error.actions';


@Component({
  selector: 'app-error-handler',
  template: ``,
  styles: []
})
export class ErrorHandlerComponent implements OnInit {

  duration = 10;

  constructor(
    private store: Store<AppState>,
    private matSnackBar: MatSnackBar
  ) {}

  openSnackBar(message: string): void {
    this.matSnackBar.open(message ? message : 'Unknnown Error', 'dismiss')
    .afterDismissed().subscribe(
      () => this.store.dispatch(releaseError()));
  }

  ngOnInit(): void {
    this.store.select('error').subscribe(state => {
      if (state.hasError) {
        this.openSnackBar(state.message);
      }
    })
  }

}
