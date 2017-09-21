import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class BattingScore {
    teamId:number;
    matchId:number;
    playerId:number;
    runs:number;
    inningId:number;

}
export class BowlingScore {
    teamId:number;
    matchId:number;
    bowlerId:number;
    runs:number;
    extras:number;
    ballTypeId:string;

}

@Injectable()
export class ScoreUpdateService {

  constructor(private http:Http) { }

       updateScore(par_1:any,par_2:any){
           console.log(par_1);
        return this.http.post('localhost:8000/', { battingscore: par_1,bowlingscore:par_2}); 
    	}

    getPlayingTeams(){

    }
}
