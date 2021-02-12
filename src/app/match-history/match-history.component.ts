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
          this.dateAscendingOrder();
        }
      });
  }

  dateAscendingOrder(){
    this.matchDetails.sort((a, b) => {
      const c = Number(a.matchDate.split('-').join(''));
      const d = Number(b.matchDate.split('-').join(''));
      // const c   = Number(a)
      // const d   = Number(b)
      return c - d;
    });
  }

  getMatchDate(input: any){
    this.service.fetchMatchshearchDetails(input)
      .subscribe(matchs => {
        this.matchDetails.length = 0;
        for(const match in matchs){
          this.matchDetails.push(matchs[match]);
        }
      });
  }
}
