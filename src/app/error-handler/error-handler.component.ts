import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from '../state';
import { releaseError } from './../state/error/error.actions';


@Component({
  selector: 'app-error-handler',
  template: `
<p-toast position="bottom-center" (onClose)="onClose()"></p-toast>
`,
  styles: [],
  providers: [MessageService]
})
export class ErrorHandlerComponent implements OnInit {
  bHasError = false;
  constructor(
    private store: Store<AppState>,
    private msgService: MessageService
  ) { }
  onClose() {
    this.store.dispatch(releaseError());
    this.bHasError = false;
  }
  ngOnInit(): void {
    this.store.select('error').subscribe(state => {
      if (state.hasError && !this.bHasError) {
        this.msgService.add({
          severity: 'error',
          summary: state.message,
          sticky: true
        });
        this.bHasError = true;
      }
    });
  }

}
