import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SpeakersComponent} from "./speakers/speakers.component";
import {MeetingDatesComponent} from "./meeting-dates/meeting-dates.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent},
  { path: 'meeting_dates', component: MeetingDatesComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
