import { Component, OnInit } from '@angular/core';
import {IMatch} from '../match.model';
import {PremierLeagueService} from '../services/premier-league.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {

  public matchDetails: IMatch[] =[];
  constructor(private service: PremierLeagueService) { }

  ngOnInit(): void {
    this.service.fetchMatchHistory()
      .subscribe(matchs => {
        for(const match in matchs){
          this.matchDetails.push(matchs[match]);
          this.dateAssendingOrder();
        }
      });
  }


}
