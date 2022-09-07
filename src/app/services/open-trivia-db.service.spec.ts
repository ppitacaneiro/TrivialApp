import { TestBed } from '@angular/core/testing';

import { OpenTriviaDbService } from './open-trivia-db.service';

describe('OpenTriviaDbService', () => {
  let service: OpenTriviaDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenTriviaDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
