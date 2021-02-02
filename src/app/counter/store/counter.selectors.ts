import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { CounterStateInterface } from '../types/counter.interface';

export const counterFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CounterStateInterface
>('counter');

export const countSelector = createSelector(
  counterFeatureSelector,
  (counterState: CounterStateInterface) => counterState
);
