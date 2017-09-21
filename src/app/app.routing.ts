import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateMatchComponent} from "./admin/create-match/create-match.component";
import { CreateTeamComponent } from './admin/create-team/create-team.component';
const appRoutes: Routes = <Routes>[
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'createMatch', component: CreateMatchComponent},
  {path: 'createTeam', component: CreateTeamComponent},

];
export const routing = RouterModule.forRoot(appRoutes);
