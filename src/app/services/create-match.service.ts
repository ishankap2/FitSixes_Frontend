import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CreateMatchService {

  constructor(private _http: Http){}
  
   public postData(match: any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post('http://localhost:3000/api/team/addTeam',match,{ headers: headers})
        .map(res => res.json());
      }

}
