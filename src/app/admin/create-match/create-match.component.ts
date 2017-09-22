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

  teams : any;

  ngOnInit() {
    this.teamService.getAllTeams()
    .subscribe(
      data =>{ this.teams= data},
      error => alert(error)     
      );
  }

  createMatch(){
    console.log(this.team1id,this.team2id,this.overs,this.balls)
  }

}
