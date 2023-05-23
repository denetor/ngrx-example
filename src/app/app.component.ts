import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from "./app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    counter$;

    constructor(private store: Store<AppState>) {
        this.counter$ = store.select('counter');
        this.store.dispatch({type: 'INCREMENT'});
        // NOTE: payload is allowed but ignored
        this.store.dispatch({type: 'INCREMENT', payload: 1});
        this.store.dispatch({type: 'INCREMENT', payload: 3});
    }

    incrementCounter() {
        this.store.dispatch({type: 'INCREMENT', payload: null});
    }

    decrementCounter() {
        this.store.dispatch({type: 'DECREMENT', payload: null});
    }
}
