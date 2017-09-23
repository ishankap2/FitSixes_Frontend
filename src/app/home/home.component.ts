import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.results = this.homeService.getLiveMatches()
    // .subscribe(
    //   data => {this.results = JSON.stringify(data), console.log(data)},
    //   error => alert("error")     
    //   );
    // this.DisplayData();
  }

  results: any

  public DisplayData(){
    // this.groundA = this.results.groundA
    // this.groundB = this.results.groundB
    // this.groundC = this.results.groundC
    // this.groundD = this.results.groundD
  }

}
