/**
 * Created by maximus on 16.12.16.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list/list.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}