import { Component, OnInit } from '@angular/core';
import { ScoreUpdateService } from '../../services/score-update.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-score-update',
  templateUrl: './score-update.component.html',
  styleUrls: ['./score-update.component.css']
})

@Injectable()
export class ScoreUpdateComponent implements OnInit {
  matchId:any=0;
	data:any = {}
	bowlingscore:any ={}
	battingscore:any ={}
  matchDetails:any ={}
  over_num:number=0;
  ball_num:number=1;
  players=[]
  tempary=[]
  tempScores = [];
  scoreStr:string = "";
  totScore:number=0;
  totalScoreWicketsStr:string = "0/0";
  currentOvers:string = "0.0";
  allMatches:any = [];
  constructor(private scoreUpdateService:ScoreUpdateService) { }

  ngOnInit() {
    this.scoreUpdateService.getAllMatches()
    .subscribe(
        res=>{
          console.log(res);
          this.allMatches = res;
          },
          err=> {}
        );
        //this.getMatchDetails(this.matchId);
        console.log("Match Id");
        console.log(this.matchId);
  }

  updateBallByball(){
        this.bowlingscore.over=Number(""+this.over_num+"."+this.ball_num)
        this.bowlingscore.currentBall=Number("0."+this.ball_num)
        if(this.data.wicket){
          this.bowlingscore.isWicket=1
        }
        if(this.data.run_out){
          this.bowlingscore.isRunOut=1
        }
        if(this.data.ball_type=="valid"){
          this.bowlingscore.isValidBall=1
          this.ball_num++;
          if(this.ball_num > this.matchDetails.ballsPerOvers){
            this.over_num++;
            this.ball_num=1;
          }
        }
        if(this.data.ball_type=="no_ball"){
          this.bowlingscore.extras++;
          this.bowlingscore.runs++;
          this.bowlingscore.isNoBall=1

        }
        if (this.data.ball_type=="wide"){
          this.bowlingscore.extras++;
          this.bowlingscore.runs++;
          this.bowlingscore.isWide=1
        }
        if(this.data.bye){
          //this.bowlingscore.ballStatus="Bye";
          this.bowlingscore.extras=this.bowlingscore.extras+this.battingscore.runs;
          this.battingscore.runs=0;
        }
        if(this.battingscore.runs==4){
          this.battingscore.isFour=1;
        }
        if(this.battingscore.runs==6){
          this.battingscore.isSix=1;
        }
        if(this.bowlingscore.extras==0 && this.battingscore.runs==0){
          this.battingscore.isDot=1;
        }
  	    this.scoreUpdateService.updateScore(this.battingscore,this.bowlingscore)
        .subscribe(
                         res=>{
                           console.log(res);
                         },
                         err=> {}
                         ),this.getPlayerScore();
                            this.getBowlerResult();
                            this.setDefault();
  }

  getPlayerScore(){
     this.scoreUpdateService.getPlayerScore(this.matchDetails.matchId,this.battingscore.playerId,this.battingscore.teamId,this.bowlingscore.bowlerId)
        .subscribe(
                         res=>{
                           this.tempScores = res.playerScore;
                           for(let sc of this.tempScores){
                             this.scoreStr = this.scoreStr + sc+"  ";
                             this.totScore = this.totScore + sc;
                           }
                           for(let player of this.players[0]){
                             if(player.playerId == this.battingscore.playerId){
                               player.score = this.scoreStr;
                               player.total = this.totScore;
                             }
                           }
                           this.totalScoreWicketsStr = res.matchResult.total+"/"+res.matchResult.wickets;
                           this.currentOvers = res.matchResult.currentOvers;
                         },
                         err=> {}
                         );
  }

  getBowlerResult(){
     this.scoreUpdateService.getBowlerResult(this.matchDetails.matchId,this.battingscore.playerId,this.battingscore.teamId,this.bowlingscore.bowlerId)
        .subscribe(
                         res=>{
                           for(let player of this.players[1]){
                             if(player.playerId == this.bowlingscore.bowlerId){
                               player.bowlerResult = res.bowlerResult;
                             }
                           }
                         },
                         err=> {}
                         );
  }

  getMatchDetails(matchId:any){
    console.log(matchId);
     this.scoreUpdateService.getMatchDetails(matchId)
     .subscribe(
                         res=>{
                            this.matchDetails=res;
                            this.battingscore={'matchId':this.matchDetails.matchId,'teamId':this.matchDetails.teams[0].teamId,'teamName':this.matchDetails.teams[0].teamName}
                            this.bowlingscore={'matchId':this.matchDetails.matchId,'teamId':this.matchDetails.teams[1].teamId,'teamName':this.matchDetails.teams[1].teamName,'extras':0}
                            this.setDefault()
                            this.players[0]=[];
                            this.players[1]=[];
                            for(let player of this.matchDetails.teams[0].players){
                              let newVal = {
                                playerId:player.playerId,
                                name:player.name,
                                score:'',
                                total:0,
                                bowlerResult:{}
                              };
                              this.players[0].push(newVal);
                            }
                            for(let player of this.matchDetails.teams[1].players){
                              let newVal = {
                                playerId:player.playerId,
                                name:player.name,
                                score:'',
                                total:0,
                                bowlerResult:{}
                              };
                              this.players[1].push(newVal);
                            }
                            console.log(this.players[0]);
                            console.log(this.players[1]);
                         },
                         err=> {}
                         );
  }

  swapInnig(){
    this.tempary=this.battingscore
    this.battingscore=this.bowlingscore
    this.bowlingscore=this.tempary
    this.tempary=[];
    this.tempary=this.players[0]
    this.players[0]=this.players[1]
    this.players[1]=this.tempary
    this.tempary=[];

  }

  stopInnig(){
    this.over_num = 0;
    this.ball_num = 1;
  }
  stopMatch(){

  }

  loadMatch(){
    this.getMatchDetails(this.matchId);
  }

  setDefault(){
        this.data.ball_type="valid"
        this.bowlingscore.runs=0
        this.battingscore.runs=0
        this.bowlingscore.isNoBall=0
        this.bowlingscore.isWide=0
        this.bowlingscore.isWicket=0
        this.bowlingscore.isRunOut=0
        this.bowlingscore.isValidBall=0
        this.bowlingscore.extras=0
        this.battingscore.isFour=0;
        this.battingscore.isSix=0;
        this.battingscore.isDot=0;
        this.data.bye=false;
        this.data.run_out=false
        this.data.wicket=false
        this.scoreStr = "";
        this.totScore = 0;

  }


}
