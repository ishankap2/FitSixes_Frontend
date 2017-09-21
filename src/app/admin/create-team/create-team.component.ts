import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  player1: string;
  player2: string;
  player3: string;
  player4: string;
  player5: string;
  player6: string;

  teamName: string;
  companyName: string;

  companies: string[];

  constructor() { }

  ngOnInit() {
  }

  public GetCompanies(){
    
  }

  public AddTeam(){

  }

  public AddPlayers(){
    
  }
}
