import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLogged: boolean;

  ngOnInit() {
   
  }

  public CheckLog(){
    this.isLogged = localStorage.getItem("loggedIn") == "true";
    console.log(!this.isLogged);
    return !this.isLogged; 
  }
}
