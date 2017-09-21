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


@NgModule({
  declarations: [
    AppComponent,
    CreateMatchComponent,
    HeaderComponent,
    HomeComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
