import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/reducers/counter.reducer';
import {jediListReducer} from './store/reducers/jedi-list.reducer';
import { environment } from '../environments/environment';
import {JediListComponent} from "./components/jedi-list/jedi-list.component";

@NgModule({
    declarations: [
        AppComponent,
        JediListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({
            counter: counterReducer,
            jediList: jediListReducer,
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
