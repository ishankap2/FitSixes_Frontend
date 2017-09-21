import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateMatchComponent} from "./admin/create-match/create-match.component";
import {ScoreUpdateComponent} from "./admin/score-update/score-update.component";
const appRoutes: Routes = <Routes>[
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateMatchComponent},
  {path: 'add_score',component: ScoreUpdateComponent},

];
export const routing = RouterModule.forRoot(appRoutes);
