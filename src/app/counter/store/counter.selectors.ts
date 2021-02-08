import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterStateInterface } from '../types/counter.interface';

export const counterFeatureSelector = createFeatureSelector<CounterStateInterface>(
  'counter'
);

export const countSelector = createSelector(
  counterFeatureSelector,
  (counterState: CounterStateInterface) => counterState.count
);
