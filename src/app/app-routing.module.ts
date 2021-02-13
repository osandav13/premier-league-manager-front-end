import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeagueTableComponent} from './league-table/league-table.component';
import {MatchHistoryComponent} from './match-history/match-history.component';

const routes: Routes = [
  {path: '', component: LeagueTableComponent},
  {path: 'leagueTable', component: LeagueTableComponent},
  {path: 'matchHistory', component: MatchHistoryComponent},
  {path: '**', component: LeagueTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
