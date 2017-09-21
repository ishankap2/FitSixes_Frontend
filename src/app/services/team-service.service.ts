import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TeamServiceService {

  constructor(private _http: Http){}
  
    public  getAllTeams(){
          return this._http.get("http://ip.jsontest.com/")
          .map(res => res.json());
      }
  
    public addTeam(){
          var headers = new Headers();
          headers.append('Content-Type','application/json');
          return this._http.post('http://timezonedb.com/api',{ headers: headers})
          .map(res => res.json());
  
      }

}
