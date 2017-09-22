import { Component, OnInit } from '@angular/core';
import { CreateMatchService } from '../../services/create-match.service';
import { Router } from "@angular/router";
import {ScoreUpdateComponent } from '../score-update/score-update.component';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
  providers: [CreateMatchService,ScoreUpdateComponent]
})
export class CreateMatchComponent implements OnInit {
  matchdata:any;
  matches:any;
  constructor(private _match: CreateMatchService,private router: Router,private _score:ScoreUpdateComponent) { }

  ngOnInit() {
    this._match.getCreateMatchDetails()
    .subscribe(
      data=>{this.matchdata = data}
    ),this.getAllMatches();
  }

  getAllMatches(){
    /*this._match.getAllMatches()
    .subscribe(
      data=>{this.matches = data;}
    );*/
    this.matches = [
  					    {
  					        "matchId": 1,
  					        "name": "Batch13 Vs Arimac"
  					    },
  					    {
  					        "matchId": 2,
  					        "name": "Creative vs 99X"
  					    }
  					];
  }

  goToMatch(matchId:any){
    this._score.reloadScoreData(matchId);
    this.router.navigate(['/add_score'])
  }
}
