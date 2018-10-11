import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { ADD_COUNTER, REMOVE_COUNTER } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  counters;
  subscription;

  constructor(private ngRedux : NgRedux<IAppState>){

    this.subscription = ngRedux.select('counters')
      .subscribe(newCounters => {
        this.counters = newCounters; 
        console.log(this.counters);
      });
  }

  addCounter() {
    this.ngRedux.dispatch({type : ADD_COUNTER});
  }

 ngOnDestroy(): void {

  this.subscription.unsubscribe();
   
 }

}
