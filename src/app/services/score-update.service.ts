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
  matchId:any = 0;
  constructor(private http:Http) { }

       updateScore(battingScore:BattingScore,bowlingscore:any): Observable<any>{
        return this.http.post('http://159.203.77.217:8080/api/bowler/addNewBall', {batting:battingScore,bowler:bowlingscore})
        .map((res:Response) => res.json())
                        .catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));
    	}

        getMatchDetails(matchId:any): Observable<any>{
        return this.http.post('http://159.203.77.217:8080/api/match/getMatchDetails',{matchId:matchId})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

        getPlayerScore(matchId:any,playerId:any,teamId:any,bowlerId:any){
            return this.http.post('http://159.203.77.217:8080/api/bowler/getScore',{matchId:matchId,playerId:playerId,teamId:teamId,bowlerId:bowlerId})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

        getBowlerResult(matchId:any,playerId:any,teamId:any,bowlerId:any){
            return this.http.post('http://159.203.77.217:8080/api/bowler/getScore',{matchId:matchId,playerId:playerId,teamId:teamId,bowlerId:bowlerId})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

        getAllMatches(){
          return this.http.get('http://159.203.77.217:8080/api/match/getAllMatches')
                          // ...and calling .json() on the response to return data
                           .map((res:Response) => res.json())
                           //...errors if any
                           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }
}
