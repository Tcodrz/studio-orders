import { AppState } from 'src/app/state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {



  constructor(private store: Store<AppState>) { }
}
