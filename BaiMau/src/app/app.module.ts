import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1mauComponent } from './bai1mau/bai1mau.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1mauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
