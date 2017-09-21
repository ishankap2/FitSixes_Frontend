import { Component, OnInit } from '@angular/core';
import { CreateMatchService } from '../../services/create-match.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
  providers: [CreateMatchService]
})
export class CreateMatchComponent implements OnInit {
  matchdata:any;
  constructor(private _match: CreateMatchService) { }

  ngOnInit() {
    this._match.getCreateMatchDetails()
    .subscribe(
      data=>{this.matchdata = data}
    );
  }

}
