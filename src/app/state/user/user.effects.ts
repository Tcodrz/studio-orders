import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ApiService } from './../services/api.service';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private router: Router
  ) {}
}
