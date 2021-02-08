import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../../store/actions/counter.action';
import { countSelector } from '../../store/counter.selectors';
import { CounterStateInterface } from '../../types/counter.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CounterStateInterface>) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues(): void {
    this.count$ = this.store.pipe(select(countSelector));
  }

  increment() {
    this.store.dispatch(incrementAction());
  }

  decrement() {
    this.store.dispatch(decrementAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }
}
