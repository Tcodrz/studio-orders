import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AppState } from 'src/app/state';
import { emitError } from './../../state/error/error.actions';
import { loaded, loading } from './../../state/loader/loader.actions';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.store.dispatch(loading());

    return next.handle(request).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          this.store.dispatch(loaded())
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(emitError({payload: {message: this.parseMessage(error.error.message), code: error.status}}));
        this.store.dispatch(loaded());
        return EMPTY;
      }),
    );
  }

  parseMessage(message: string): string {
    switch(message) {
      case 'User Not Found':
        return 'אחד מהפרטים אינם נכונים';
      default:
        return 'שגיאת שרת';
    }
  }
}
