import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Team} from '../entities/Team'
import {Players} from '../entities/Players'

import 'rxjs/add/operator/map';

@Injectable()
export class TeamServiceService {

  constructor(private _http: Http){}

    baseUrl: string = "http://159.203.77.217:8080";
  
    public  getAllTeams(){
          return this._http.get(this.baseUrl+"api/team/getAllTeams")
          .map(res => res.json());
    }
  
    public addTeam(team: Team){
          var headers = new Headers();
          headers.append('Content-Type','application/json');
          return this._http.post(this.baseUrl+'api/team/addTeam',team,{ headers: headers})
          .map(res => res.json());
  
    }
    
    public addPlayers(players: any){
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      return this._http.post(this.baseUrl+'api/player/addPlayers',players,{ headers: headers})
      .map(res => res.json());
    }

    public delTeam(id: number){
      console.log(id)
      var headers = new Headers();
      headers.append('Content-Type','application/json');
      return this._http.post(this.baseUrl+'api/team/removeTeam',{ "teamId":id},{ headers: headers})
      .map(res => res.json());
    }

}
