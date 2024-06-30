import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css',
})
export class CounterButtonsComponent {
  // @Output() emitIncrement = new EventEmitter<void>();
  // @Output() emitDecrement = new EventEmitter<void>();
  // @Output() emitReset = new EventEmitter<void>();
  // handleIncrement() {
  //   this.emitIncrement.emit();
  // }
  // handleDecrement() {
  //   this.emitDecrement.emit();
  // }
  // handleReset() {
  //   this.emitReset.emit();
  // }
  constructor(private store: Store<{ counterRoot: CounterState }>) {}

  handleIncrement() {
    this.store.dispatch(increment());
  }
  handleDecrement() {
    this.store.dispatch(decrement());
  }
  handleReset() {
    this.store.dispatch(reset());
  }
}
