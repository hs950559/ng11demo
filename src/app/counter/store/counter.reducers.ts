import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { CounterStateInterface } from '../types/counter.interface';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from './actions/counter.action';

export const initialState: CounterStateInterface = {
  count: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      count: 0,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
