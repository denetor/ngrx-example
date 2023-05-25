import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Jedi } from './models/jedi.model';
import { AppState } from "../../app.state";
import { JediListActions } from './store/jedi-list.actions';

@Component({
    selector: 'app-jedi-list',
    templateUrl: './jedi-list.component.html',
    styles: [],
})
export class JediListComponent {
    list$: Observable<Jedi[]>;
    newJediName = '';

    constructor(private readonly store: Store<AppState>) {
        this.list$ = store.select('jediList');
    }

    add(): void {
        this.store.dispatch(JediListActions.add(this.newJediName));
        this.newJediName = '';
    }

    remove(id: number): void {
        this.store.dispatch(JediListActions.remove(id));
    }

    clear(): void {
        this.store.dispatch(JediListActions.load([]));
    }
}
