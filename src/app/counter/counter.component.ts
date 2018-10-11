import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { INCREMENT, DECREMENT, RESET, REMOVE_COUNTER } from '../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  @Input() index: number;
  counter: number = 0;
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.subscription = this.ngRedux.select<IAppState>('counters')
      .subscribe(newCounters => {
        if (newCounters[this.index] != undefined) {
          this.counter = newCounters[this.index].counter;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT, index: this.index })
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT, index: this.index })
  }

  reset() {
    this.ngRedux.dispatch({ type: RESET, index: this.index })
  }

  removeCounter() {
    this.ngRedux.dispatch({ type: REMOVE_COUNTER, index: this.index });
  }

}