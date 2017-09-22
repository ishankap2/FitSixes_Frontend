import { Component, OnInit } from '@angular/core';
import { CreateMatchService } from '../../services/create-match.service';
import { Router } from "@angular/router";
import { ScoreUpdateService } from '../../services/score-update.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
  providers: [CreateMatchService,ScoreUpdateService]
})
export class CreateMatchComponent implements OnInit {
  matchdata:any;
  matches:any;
  constructor(private _match: CreateMatchService,private router: Router,private _score:ScoreUpdateService) { }

  ngOnInit() {
    this._match.getCreateMatchDetails()
    .subscribe(
      data=>{this.matchdata = data}
    );
  }
}
