/**
 * Created by maximus on 16.12.16.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list/list.component'
import {Service} from "./Service";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, ListComponent],
    providers: [HttpModule, Service],
    bootstrap: [AppComponent]
})
export class AppModule {

}