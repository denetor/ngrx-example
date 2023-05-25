import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './store/reducers/counter.reducer';
import { environment } from '../environments/environment';
import {JediModule} from "./jedi/jedi.module";
import {jediListReducer} from "./jedi/jedi-list/store/jedi-list.reducer";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        JediModule,
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
