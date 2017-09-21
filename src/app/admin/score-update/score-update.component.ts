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
  constructor(private scoreUpdateService:ScoreUpdateService) { }

  ngOnInit() {
 //  	this.score.battingscore={'teamId':1,
	// 'matchId':1,
	// 'playerId':1,
	// 'runs':4,
	// 'inningId':1}
 //  	this.score.bowlingscore={'teamId':1,
	// 'matchId':1,
	// 'playerId':1,
	// 'runs':4,
	// 'inningId':1}
  }

  updateBallByball(){
  	    this.scoreUpdateService.updateScore(this.bowlingscore,this.battingscore)
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

  // getTeams(){
  // 	this.scoreUpdateService.getPlayingTeams();
  // }

}
