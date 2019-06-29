import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImperativeSearchComponent } from './imperative-search/imperative-search.component';
import { ReactiveSearchComponent } from './reactive-search/reactive-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImperativeSearchComponent, ReactiveSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
