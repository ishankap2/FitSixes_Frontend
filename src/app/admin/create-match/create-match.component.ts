import { Component, OnInit } from '@angular/core';
import { CreateMatchService } from '../../services/create-match.service';
import {TeamServiceService} from '../../services/team-service.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
  providers:[CreateMatchService,TeamServiceService]
})
export class CreateMatchComponent implements OnInit {

  constructor(
    private matchService: CreateMatchService,
    private teamService: TeamServiceService
  ) { }

  team1id:any; 
  team2id:any;
  overs: number;
  balls: number;
  name:string;
  groundId: number;
  
  teams : any;

  ngOnInit() {
    this.teamService.getAllTeams()
    .subscribe(
      data =>{ this.teams= data},
      error => alert(error)     
      );
  }

  createMatch(){
    var match = {
      name:this.name,
      groundId: this.groundId,
      overs: this.overs,
      balls: this.balls,
      team1id: this.team1id,
      team2id: this.team2id
    }

    this.matchService.createMatch(match)
    .subscribe(
      data => alert("Success"),
      error => alert(error)       
      );
      window.location.reload();
  }

}
