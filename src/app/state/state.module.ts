import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './index';
import { OrdersEffects } from './orders/orders.effects';
import { UserEffects } from './user/user.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([OrdersEffects, UserEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: []
})
export class StateModule { }
