import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

    getLiveMatches(){
        // return this._http.get("http://localhost:8080/api/live/getAllLiveScores")
        // .map(res => res.json());
        return {
            "groundA": [
                {
                    "teamId": 2,
                    "teamName": "Arimac Team",
                    "companyName": "Arimac",
                    "total": 13,
                    "extras": 1,
                    "wickets": 0,
                    "overs": 0,
                    "battingTeamId": 1
                },
                {
                    "teamId": 1,
                    "teamName": "Batch 13",
                    "companyName": "Fit",
                    "total": 26,
                    "extras": 0,
                    "wickets": 0,
                    "overs": 0,
                    "battingTeamId": 1
                }
            ],
            "groundB": [
                {
                    "teamId": 4,
                    "teamName": "Creative Solutuion Team ",
                    "companyName": "Creative Solutions",
                    "total": 4,
                    "extras": 0,
                    "wickets": 0,
                    "overs": 0,
                    "battingTeamId": 4
                }
            ],
            "groundD": null
        }
    }

    getRecentMatches(){
        
    }

}