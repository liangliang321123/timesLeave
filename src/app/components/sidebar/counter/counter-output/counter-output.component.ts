import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent implements OnInit {
  // counter?: number;

  counter$?: Observable<{ counter: number }>;

  counterSubscription?: Subscription;

  constructor(private store: Store<{ counterRoot: CounterState }>) {}
  // @Input() counterProps: any;
  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counterRoot')
    //   .subscribe((data) => {
    //     this.counter = data.counter;
    //   });

    this.counter$ = this.store.select('counterRoot');
  }

  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
