import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([]),
  ],
})
export class CounterModule {}
