import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILeagueTeams} from "../league-teams.model";
import {Observable} from "rxjs";
import {IMatch} from "../../match.model";

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueService {
  private BASE_URL= 'http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  fetchMatchHistory():Observable<IMatch[]>{
    return this.http.get<IMatch[]>(this.BASE_URL + 'matchHistory')
  }

  fetchLeagueTeams():Observable<ILeagueTeams[]>{
    return this.http.get<ILeagueTeams[]>(this.BASE_URL + 'leagueTable')
  }

  fetchPlayedMatchDetails(){
    return this.http.get<IMatch>(this.BASE_URL + 'playMatch')
  }

  fetchMatchshearchDetails(date:string):Observable<IMatch[]>{
    return this.http.get<IMatch[]>(this.BASE_URL + 'matchHistory?date='+ date)
  }

}
