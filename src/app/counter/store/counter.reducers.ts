import { createReducer, on } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from './actions/counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => state + 1),
  on(decrementAction, (state) => state - 1),
  on(resetAction, () => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
