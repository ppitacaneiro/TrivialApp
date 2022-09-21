import { Ranking } from './../interfaces/ranking';
import { MessageService } from './../services/message.service';
import { TriviaApiService } from './../services/trivia-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.page.html',
  styleUrls: ['./rankings.page.scss'],
})
export class RankingsPage implements OnInit {
  rankings: Ranking[] = [];

  constructor(
    private triviaApiService: TriviaApiService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getRankings();
  }

  getRankings() {
    this.triviaApiService.getRankings().subscribe(
      (response) => {
        this.rankings = response;
      },
      (error) => {
        this.messageService.presentToast(error.message);
      }
    );
  }
}
