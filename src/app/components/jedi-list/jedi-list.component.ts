import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Jedi} from "../../store/models/jedi.model";
import {AppState} from "../../app.state";

@Component({
    selector: 'app-jedi-list',
    templateUrl: './jedi-list.component.html',
    styles: [],
})
export class JediListComponent {
    list$: Observable<Jedi[]>;
    counter = 0;
    newJediName = '';

    constructor(private readonly store: Store<AppState>) {
        this.list$ = store.select('jediList');
    }

    add(): void {
        this.store.dispatch({
            type: 'ADD_JEDI',
            payload: {id: this.counter++, name: this.newJediName},
        });
        this.newJediName = '';
    }

    remove(id: number): void {
        this.store.dispatch({
            type: 'REMOVE_JEDI',
            payload: {id},
        });
    }

    clear(): void {
        this.store.dispatch({
            type: 'LOAD_JEDIS',
            payload: [],
        });
    }
}
