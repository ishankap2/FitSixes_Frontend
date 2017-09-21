import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CreateMatchService {

  constructor(private _http: Http){}
  
    //   getAllCompanies(){
    //       return this._http.get("http://localhost:55079/RecruitmentProcess/GetAllProcesses")
    //       .map(res => res.json());
    //   }
  
    //   postData(){
    //       var headers = new Headers();
    //       headers.append('Content-Type','application/json');
    //       return this._http.post('http://localhost:3000/posts',{ headers: headers})
    //       .map(res => res.json());
  
    //   }

}
