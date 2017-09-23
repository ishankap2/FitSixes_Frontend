import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.results = this.homeService.getLiveMatches()
    // .subscribe(
    //   data => {this.results = JSON.stringify(data), console.log(data)},
    //   error => alert("error")     
    //   );
    this.DisplayData();
  }

  results: any

  groundA: any;
  groundB: any;
  groundC: any;
  groundD: any;

  groundAovers: any;
  groundBovers: any;
  groundCovers: any;
  groundDovers: any;

  groundAscore: number;
  groundBscore: number;
  groundCscore: number;
  groundDscore: number;

  groundAwickets: number;
  groundBwickets: number;
  groundCwickets: number;
  groundDwickets: number;

  groundABattingName:string;
  groundBBattingName:string;
  groundCBattingName:string;
  groundDBattingName:string;

  groundAMatchName:string;
  groundBMatchName:string;
  groundCMatchName:string;
  groundDMatchName:string;

  groundATarget:string;
  groundBTarget:string;
  groundCTarget:string;
  groundDTarget:string;

  public DisplayData(){
    this.groundA = this.results.groundA
    this.groundB = this.results.groundB
    this.groundC = this.results.groundC
    this.groundD = this.results.groundD

    if(this.groundA != null){
      if(this.groundA[1] == null){
        this.groundAovers = this.groundA[0].overs;
        this.groundAscore = this.groundA[0].total;
        this.groundAwickets = this.groundA[0].wickets;
        this.groundABattingName = this.groundA[0].teamName;
        this.groundAMatchName = this.groundA[0].matchName;
      }else{
        if(this.groundA[0].teamId == this.groundA[0].battingTeamId){
          this.groundAovers = this.groundA[0].overs;
          this.groundAscore = this.groundA[0].total;
          this.groundAwickets = this.groundA[0].wickets;
          this.groundABattingName = this.groundA[0].teamName;
          this.groundAMatchName = this.groundA[0].matchName;
          this.groundATarget = this.groundA[1].total;
        }else{
          this.groundAovers = this.groundA[1].overs;
          this.groundAscore = this.groundA[1].total;
          this.groundAwickets = this.groundA[1].wickets;
          this.groundABattingName = this.groundA[1].teamName;
          this.groundAMatchName = this.groundA[1].matchName;
          this.groundATarget = this.groundA[0].total;
        }
      }
    }

    if(this.groundB != null){
      if(this.groundB[1] == null){
        this.groundBovers = this.groundB[0].overs;
        this.groundBscore = this.groundB[0].total;
        this.groundBwickets = this.groundB[0].wickets;
        this.groundBBattingName = this.groundB[0].teamName;
        this.groundBMatchName = this.groundB[0].matchName;
      }else{
        if(this.groundB[0].teamId == this.groundB[0].battingTeamId){
          this.groundBovers = this.groundB[0].overs;
          this.groundBscore = this.groundB[0].total;
          this.groundBwickets = this.groundB[0].wickets;
          this.groundBBattingName = this.groundB[0].teamName;
          this.groundBMatchName = this.groundB[0].matchName;
          this.groundBTarget = this.groundB[1].total;
        }else{
          this.groundBovers = this.groundB[1].overs;
          this.groundBscore = this.groundB[1].total;
          this.groundBwickets = this.groundB[1].wickets;
          this.groundBBattingName = this.groundB[1].teamName;
          this.groundBMatchName = this.groundB[1].matchName;
          this.groundBTarget = this.groundB[0].total;
        }
      }
    }

    if(this.groundC != null){
      if(this.groundC[1] == null){
        this.groundCovers = this.groundC[0].overs;
        this.groundCscore = this.groundC[0].total;
        this.groundCwickets = this.groundC[0].wickets;
        this.groundCBattingName = this.groundC[0].teamName;
        this.groundCMatchName = this.groundC[0].matchName;
      }else{
        if(this.groundC[0].teamId == this.groundC[0].battingTeamId){
          this.groundCovers = this.groundC[0].overs;
          this.groundCscore = this.groundC[0].total;
          this.groundCwickets = this.groundC[0].wickets;
          this.groundCBattingName = this.groundC[0].teamName;
          this.groundCMatchName = this.groundC[0].matchName;
          this.groundCTarget = this.groundC[1].total;
        }else{
          this.groundCovers = this.groundC[1].overs;
          this.groundCscore = this.groundC[1].total;
          this.groundCwickets = this.groundC[1].wickets;
          this.groundCBattingName = this.groundC[1].teamName;
          this.groundCMatchName = this.groundC[1].matchName;
          this.groundCTarget = this.groundC[0].total;
        }
      }
    }

    if(this.groundD != null){
      if(this.groundD[1] == null){
        this.groundDovers = this.groundD[0].overs;
        this.groundDscore = this.groundD[0].total;
        this.groundDwickets = this.groundD[0].wickets;
        this.groundDBattingName = this.groundD[0].teamName;
        this.groundDMatchName = this.groundD[0].matchName;
      }else{
        if(this.groundD[0].teamId == this.groundD[0].battingTeamId){
          this.groundDovers = this.groundD[0].overs;
          this.groundDscore = this.groundD[0].total;
          this.groundDwickets = this.groundD[0].wickets;
          this.groundDBattingName = this.groundD[0].teamName;
          this.groundDMatchName = this.groundD[0].matchName;
          this.groundDTarget = this.groundD[1].total;
        }else{
          this.groundDovers = this.groundD[1].overs;
          this.groundDscore = this.groundD[1].total;
          this.groundDwickets = this.groundD[1].wickets;
          this.groundDBattingName = this.groundD[1].teamName;
          this.groundDMatchName = this.groundD[1].matchName;
          this.groundDTarget = this.groundD[0].total;
        }
      }
    }

    console.log(this.groundA[0])
  }
}


