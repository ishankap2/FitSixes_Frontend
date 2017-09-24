import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateMatchComponent} from "./admin/create-match/create-match.component";
import { CreateTeamComponent } from './admin/create-team/create-team.component';
import {LoginComponent} from './admin/login/login.component'
import {AuthService} from '../app/services/auth.service';
import {ScoreUpdateComponent} from "./admin/score-update/score-update.component";
const appRoutes: Routes = <Routes>[
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'CM', component: CreateMatchComponent,canActivate:[AuthService]},
  {path: 'CT', component: CreateTeamComponent, canActivate:[AuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'AS',component: ScoreUpdateComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
