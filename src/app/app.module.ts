import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleMenu1Component } from './simple-menu1/simple-menu1.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { MeetingDatesComponent } from './meeting-dates/meeting-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMenu1Component,
    HomeComponent,
    SpeakersComponent,
    MeetingDatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
