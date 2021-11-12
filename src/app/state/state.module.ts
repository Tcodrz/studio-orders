import { UserEffects } from './user/user.effects';
import { OrdersEffects } from './orders/orders.effects';
import { reducers } from './index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([OrdersEffects, UserEffects]),
    StoreDevtoolsModule.instrument()
  ]
})
export class StateModule { }
