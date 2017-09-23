import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CreateMatchService {

  constructor(private _http: Http){}
  
   public createMatch(match: any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post('http://159.203.77.217:8080/api/match/createMatch',match,{ headers: headers})
        .map(res => res.json());
      }

}
