import { Component, OnInit } from '@angular/core';
import { ScoreUpdateService } from '../../services/score-update.service';

@Component({
  selector: 'app-score-update',
  templateUrl: './score-update.component.html',
  styleUrls: ['./score-update.component.css']
})
export class ScoreUpdateComponent implements OnInit {
	score:any = {}
	bowlingscore:any ={}
	battingscore:any={}
  matchDetails:any={}
  tempary=[]
  data:any={}
  constructor(private scoreUpdateService:ScoreUpdateService) { }

  ngOnInit() {
      //getMatchDetails(){
        this.matchDetails={'matchId':1,'name':'Vertusa1VSVertusa2','groundId':1,'groundName':'A','team1Id': 1, 'team1Name':'Vertusa Team 1','team2Id': 2, 'team2Name': 'Vertusa Team 2', 'roundId': 1, 'InningId': 1, 'battingTeamId': 1, 'battingTeamName': 'Vertusa Team 1', 'target': null }        
       

      //}
        this.battingscore={'teamId':this.matchDetails.team1Id,'teamName':this.matchDetails.team1Name}
        this.bowlingscore={'teamId':this.matchDetails.team2Id,'teamName':this.matchDetails.team2Name,'extra':0}
         this.battingscore.players=[
        {'playerId':1,'name':'pra'},{'playerId':2,'name':'nimal'},{'playerId':3,'name':'kamal'},{'playerId':4,'name':'sugath'},{'playerId':5,'name':'kusal'}
        ]
        this.bowlingscore.players=[
        {'playerId':6,'name':'udara'},{'playerId':7,'name':'prabhath'},{'playerId':8,'name':'chaml'},{'playerId':9,'name':'perrera'},{'playerId':10,'name':'ajith'}
        ]
        this.bowlingscore.ball_type="valid"
        this.bowlingscore.runs=0
  }

  updateBallByball(){
        if(this.bowlingscore.ball_type=="no_ball" || this.bowlingscore.ball_type=="wide"){
          this.bowlingscore.extra++;
        }
        if(this.bowlingscore.ballStatus==2 || this.bowlingscore.ballStatus==3){
          this.bowlingscore.extra=this.bowlingscore.extra+this.battingscore.runs;
          this.battingscore.runs=0;
        }
  	    this.scoreUpdateService.updateScore(this.battingscore,this.bowlingscore)
        .subscribe(
            data => {
              console.log(data);
              },
            error => {
              console.log(error._body);
            },
            ()=> console.log("Finished")
        );
  }

  swapInnig(){
    this.tempary=this.battingscore
    this.battingscore=this.bowlingscore
    this.bowlingscore=this.tempary
    this.tempary=[];
  }

  // getTeams(){
  // 	this.scoreUpdateService.getPlayingTeams();
  // }

}
