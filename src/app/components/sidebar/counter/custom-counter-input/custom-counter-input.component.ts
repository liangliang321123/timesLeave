import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css',
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ count: this.value }));
  }
}
