import { createAction } from '@ngrx/store';
import { CounterActionTypes } from '../counter-action-types';

export const incrementAction = createAction(CounterActionTypes.INCREMENT);
export const decrementAction = createAction(CounterActionTypes.DECREMENT);
export const resetAction = createAction(CounterActionTypes.RESET);
