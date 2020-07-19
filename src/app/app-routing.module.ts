import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayerComponent } from './player/player.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { BeatPlayerComponent } from './beat-player/beat-player.component';
import { Launchpad2Component } from './launchpad2/launchpad2.component';


const routes: Routes = [{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'player',component: PlayerComponent},
{path:'player/launchpad',component: LaunchpadComponent},
{path:'player/beats',component: BeatPlayerComponent},
{path:'player/launchpad-beats',component: Launchpad2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
