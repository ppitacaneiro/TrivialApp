import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { Score } from '../interfaces/score';
import { Ranking } from '../interfaces/ranking';

@Injectable({
  providedIn: 'root',
})
export class TriviaApiService {
  private url: string = 'https://localhost:44355';

  constructor(private httpClient: HttpClient) {}

  // TODO: type response
  savePlayerData(player: Player): Observable<any> {
    return this.httpClient.post(`${this.url}/api/player`, player);
  }

  saveScore(score: Score): Observable<any> {
    return this.httpClient.post(`${this.url}/api/ranking`, score);
  }

  getRankings(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(`${this.url}/api/ranking`);
  }
}
