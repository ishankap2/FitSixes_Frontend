import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../entities/Team'; 
import {Players} from '../../entities/Players';
import {TeamServiceService} from '../../services/team-service.service'

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers:[TeamServiceService]
})
export class CreateTeamComponent implements OnInit {

  teams: any;

  team = new Team;
  players = new Players;

  constructor(private teamService: TeamServiceService) { }

  ngOnInit() {
  }

  public GetTeams(){
    this.teamService.getAllTeams()
    .subscribe(
      data =>{ this.teams= JSON.stringify(data), console.log(data)},
      error => alert(error),
      () => console.log("Finished..")       
      );
  }

  public AddTeam(){
    this.teamService.addTeam()
    .subscribe(
      data => alert(data),
      error => alert(error),
      () => console.log("Finished..")       
      );
  }

  public AddPlayers(){
    console.log(this.players);
  }
}
