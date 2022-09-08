import { Injectable } from '@angular/core';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  // TODO using observables rxjs

  private results: Result[] = [];
  private totalTime: string;
  private timeInMiliseconds: number;
  private level: string;

  constructor() {}

  setResults(results: Result[]) {
    this.results = results;
  }

  getResults() {
    return this.results;
  }

  setTotalTime(time: string) {
    this.totalTime = time;
  }

  getTotalTime() {
    return this.totalTime;
  }

  setLevel(level: string) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }

  setTimeInMiliSeconds(time: number) {
    this.timeInMiliseconds = time;
  }

  getTimeInMiliSeconds() {
    return this.timeInMiliseconds;
  }
}
