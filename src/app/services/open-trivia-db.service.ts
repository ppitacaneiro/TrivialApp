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
}
