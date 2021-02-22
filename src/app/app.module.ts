import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    BottomNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
