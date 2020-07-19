import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { RandomBeatComponent } from './random-beat/random-beat.component';
import { BeatPlayerComponent } from './beat-player/beat-player.component';
import { Launchpad2Component } from './launchpad2/launchpad2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    NavComponent,
    AboutComponent,
    LaunchpadComponent,
    RandomBeatComponent,
    BeatPlayerComponent,
    Launchpad2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
