import { Question } from './../interfaces/question';
import { GameOptions } from './../interfaces/game-options';
import { Category } from './../interfaces/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenTriviaDbService {
  private baseUrl: string = 'https://opentdb.com/';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(`${this.baseUrl}api_category.php`)
      .pipe(delay(1000));
  }

  getQuestions(gameOptions: GameOptions): Observable<Question[]> {
    return this.httpClient
      .get<Question[]>(
        `${this.baseUrl}api.php?amount=${gameOptions.amount}&category=${gameOptions.categoryId}&difficulty=${gameOptions.difficulty}&type=multiple`
      )
      .pipe(delay(1000));
  }
}
