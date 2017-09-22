import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  canActivate(){
    var val: boolean = localStorage.getItem("loggedIn") == "true";
    return val;
  }

  loginAdmin(){
    localStorage.setItem("loggedIn","true");
  }

  logout(){
    localStorage.removeItem("loggedIn");
  }

}
