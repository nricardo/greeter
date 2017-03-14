'use strict';

import 'zone.js';
import 'reflect-metadata';

// import libs stuff
import {NgModule} from '@angular/core';
import {enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// import components
import {Main} from 'main';
import {Greeter} from 'greeter';

// app's module
@NgModule({
  bootstrap: [Main],
  declarations: [
    Main,
    Greeter
  ],
  imports: [BrowserModule]
})
export class App {}

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

// start things up!
platformBrowserDynamic().bootstrapModule(App);
