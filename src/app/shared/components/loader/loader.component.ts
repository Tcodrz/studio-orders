import { Observable, of, map } from 'rxjs';
import { AppState } from 'src/app/state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="spinner">
    <p-progressSpinner *ngIf="loading$ | async"></p-progressSpinner>
  </div>
  `,
  styles: [`
    .spinner {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  `]
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean> = of(false);
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.loading$ = this.store.select('loader').pipe(
      map(loadState => loadState.loading)
    );
  }
}
