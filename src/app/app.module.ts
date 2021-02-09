import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import {HttpClientModule} from '@angular/common/http';
import { MatchHistoryComponent } from './match-history/match-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent,
    MatchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
