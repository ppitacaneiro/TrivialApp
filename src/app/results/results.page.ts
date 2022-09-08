import { Router } from '@angular/router';
import { ResultsService } from './../services/results.service';
import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/result';

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

  constructor(private resultsService: ResultsService, private router: Router) {}

  ngOnInit() {
    this.results = this.resultsService.getResults();

    console.log(this.results);

    this.time = this.resultsService.getTotalTime();
    this.totalQuestions = this.results.length;
    this.correctAnswers = this.findCorrectAnswers();
    this.incorrectAnswers = this.totalQuestions - this.correctAnswers;
    this.score = this.calculateScore();
  }

  // TODO
  // Implement returning type in all methods
  findCorrectAnswers(): number {
    return this.results.filter((x) => x.isAnswerCorrect).length;
  }

  // TODO
  // Subtract time in mileseconds for calculate total score
  // depending on the level of difficulty recalculate score
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
}
