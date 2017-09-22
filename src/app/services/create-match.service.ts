import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



import 'rxjs/add/operator/map';

@Injectable()
export class CreateMatchService {
  private _apiurl='assets/product.json';
  constructor(private _http: Http) {}

      getAllCompanies(){
          return this._http.get("http://localhost:55079/RecruitmentProcess/GetAllProcesses")
          .map(res => res.json());
      }

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

      postData(){
          var headers = new Headers();
          headers.append('Content-Type','application/json');
          return this._http.post('http://localhost:3000/posts',{ headers: headers})
          .map(res => res.json());

      }

   getCreateMatchDetails() {
    return this._http.get(this._apiurl)
        .map(data => {
            data.json();
            return data.json();
    });
  }
}
