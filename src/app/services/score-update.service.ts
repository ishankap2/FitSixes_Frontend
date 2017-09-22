import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

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

       updateScore(battingScore:BattingScore,bowlingscore:any): Observable<any>{
        return this.http.post('http://fitsixes.azurewebsites.net/api/bowler/addNewBall', {batting:battingScore,bowler:bowlingscore})
        .map((res:Response) => res.json())
                        .catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));
    	}

        getMatchDetails(): Observable<any>{
        return this.http.get('http://localhost:8000/json')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

        getPlayerScore(matchId:any,playerId:any,teamId:any){
            return this.http.post('http://localhost:8000/player',{matchId:matchId,playerId:playerId,teamId:teamId})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
        }

        getBowlerResult(matchId:any,playerId:any,teamId:any){
            return this.http.post('http://localhost:8000/player',{matchId:matchId,playerId:playerId,teamId:teamId})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));   
        }
}
