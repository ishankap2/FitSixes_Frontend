import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CreateMatchService {
  private _apiurl='assets/product.json';
  constructor(private _http: Http) {}
  
   public createMatch(match: any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post('http://159.203.77.217:8080/api/match/createMatch',match,{ headers: headers})
        .map(res => res.json());
      }

}
