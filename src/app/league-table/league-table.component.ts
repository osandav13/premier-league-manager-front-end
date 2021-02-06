import { Component, OnInit } from '@angular/core';
import { ILeagueTeams } from "../league-teams.model";
import {PremierLeagueService} from "../services/premier-league.service";
@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  public leagueTeams: ILeagueTeams[] = [];
  private pointsDescendingOrder = false;
  private goalsDescendingOrder = false;
  private winsDescendingOrder = false;

  constructor(private service: PremierLeagueService) {
  }

  ngOnInit(): void {
    this.service.fetchLeagueTeams()
      .subscribe((teams: any) => {
        for (const team in teams) {
          this.leagueTeams.push(teams[team]);
        }
      })
  }

  orderByPoints() {
    if (!this.pointsDescendingOrder) {
      this.pointsDescendingOrder = true
      this.leagueTeams.sort(this.desendingOrderOfPoints)
    } else {
      this.pointsDescendingOrder = false
      this.leagueTeams.sort(this.assendingOrderOfPoints)
    }
  }
}
