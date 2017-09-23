import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private _http: Http) { }

    getLiveMatches(){
        return this._http.get("http://159.203.77.217:8080/api/live/getAllLiveScores")
        .map(res => res.json());
    }

    getRecentMatches(){
        return this._http.get("http://159.203.77.217:8080/api/match/getAllRecentMatches")
        .map(res => res.json());
    }

}