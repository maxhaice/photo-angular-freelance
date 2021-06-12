import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EntryComponent } from './core/routes/entry/entry.component';

import {RoutingModule} from "./core/modules/routing/routing.module";
import {SharingModule} from "./core/modules/sharing/sharing.module";

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [EntryComponent]
})
export class AppModule { }
