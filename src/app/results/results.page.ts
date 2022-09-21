import { MessageService } from './../services/message.service';
import { TriviaApiService } from './../services/trivia-api.service';
import { PlayerService } from './../services/player.service';
import { Router } from '@angular/router';
import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/result';
import { Player } from '../interfaces/player';
import { Score } from '../interfaces/score';

const pointsIfAnswerIsCorrect: number = 1000;

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  score: number;
  time: string;
  results: Result[] = [];
  player: Player;
  finalScore: Score = {
    playerId: 0,
    totalScore: 0,
  };

  constructor(
    private resultsService: ResultsService,
    private router: Router,
    private playerService: PlayerService,
    private triviaApiService: TriviaApiService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.results = this.resultsService.getResults();
    this.time = this.resultsService.getTotalTime();
    this.totalQuestions = this.results.length;
    this.correctAnswers = this.findCorrectAnswers();
    this.incorrectAnswers = this.totalQuestions - this.correctAnswers;
    this.score = this.calculateScore();
    this.player = this.playerService.getPlayer();
    this.finalScore.playerId = this.player.id;
    this.finalScore.totalScore = this.score;
    this.saveScoreRemotely(this.finalScore);
  }

  saveScoreRemotely(score: Score) {
    this.triviaApiService.saveScore(score).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
        this.messageService.presentToast(error.message);
      }
    );
  }

  findCorrectAnswers(): number {
    return this.results.filter((x) => x.isAnswerCorrect).length;
  }

  calculateScore(): number {
    const difficulty = this.resultsService.getLevel();
    const time = this.resultsService.getTimeInMiliSeconds();
    const difficultyFactor = this.calculateDificultFactor(difficulty);
    const timeFactor = time / 60 / 60;
    let score =
      this.correctAnswers * pointsIfAnswerIsCorrect -
      difficultyFactor -
      timeFactor;

    return Math.round(score);
  }

  calculateDificultFactor(difficulty: string) {
    let factor = 0;
    // TODO : using enum for score and levels of difficulty
    switch (difficulty) {
      case 'easy':
        factor = 100;
        break;
      case 'medium':
        factor = 50;
        break;
      default:
        factor = 0;
        break;
    }

    return factor;
  }

  goToDetails() {
    this.router.navigate(['results/details']);
  }

  goToRankings() {
    this.router.navigate(['rankings']);
  }
}
