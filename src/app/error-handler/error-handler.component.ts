import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from '../state';
import { releaseError } from './../state/error/error.actions';


@Component({
  selector: 'app-error-handler',
  template: `
<p-toast position="bottom-center" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message pTemplate="message">
        <div class="p-flex p-flex-column" style="flex: 1">
            <div class="p-text-center">
                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                <h4>{{message.summary}}</h4>
            </div>
        </div>
    </ng-template>
</p-toast>
`,
  styles: [],
  providers: [MessageService]
})
export class ErrorHandlerComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private msgService: MessageService
  ) { }
  onClose() {
    console.log('reject');
    this.store.dispatch(releaseError());
  }
  ngOnInit(): void {
    this.store.select('error').subscribe(state => {
      if (state.hasError) {
        this.msgService.add({
          severity: 'error',
          summary: state.message,
          sticky: true
        });
      }
    })
  }

}
