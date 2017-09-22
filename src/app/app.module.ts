import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateMatchComponent } from './admin/create-match/create-match.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { CreateTeamComponent } from './admin/create-team/create-team.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthService } from '../app/services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    CreateMatchComponent,
    HeaderComponent,
    HomeComponent,
    CreateTeamComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
