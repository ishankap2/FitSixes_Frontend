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

  teamid:number;

  player1: string;
  player2: string;
  player3: string;
  player4: string;
  player5: string;
  player6: string;
  player7: string;

  players:any;

  constructor(private teamService: TeamServiceService) { }

  ngOnInit() {
    this.GetTeams()
  }

  public GetTeams(){
    this.teamService.getAllTeams()
    .subscribe(
      data =>{ this.teams= data},
      error => alert("error")     
      );
  }

  public AddTeam(){
    this.teamService.addTeam(this.team)
    .subscribe(
      data => {console.log(data)},
      error => console.log(error)       
      );
      // window.location.reload();
  }

  public AddPlayers(){
    this.players = { teamId: this.teamid, players:[
      this.player1,this.player2,this.player3,this.player4,this.player5, this.player6, this.player7
    ]}
    this.teamService.addPlayers(this.players)
    .subscribe(
      data => {alert(data),window.location.reload();},
      error => {alert("error"),window.location.reload();}      
      );
    console.log(this.players)
  }

  public DeleteTeam(){
    this.teamService.delTeam(this.teamid)
    .subscribe(
      data => alert(data),
      error => alert("error")       
      );
      window.location.reload();
  }
}
