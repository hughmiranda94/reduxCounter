import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { StoreEnhancer } from 'redux';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux : NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE, undefined, [<StoreEnhancer<IAppState>>devToolsEnhancer(undefined)]);
  }
}
