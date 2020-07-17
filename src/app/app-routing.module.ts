import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayerComponent } from './player/player.component';
import { LaunchpadComponent } from './launchpad/launchpad.component';
import { BeatPlayerComponent } from './beat-player/beat-player.component';


const routes: Routes = [{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'player',component: PlayerComponent},
{path:'player/launchpad',component: LaunchpadComponent},
{path:'player/beats',component: BeatPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
