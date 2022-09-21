import { ResultsService } from './../../services/results.service';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/result';

@Component({
  selector: 'app-detail-results',
  templateUrl: './detail-results.component.html',
  styleUrls: ['./detail-results.component.scss'],
})
export class DetailResultsComponent implements OnInit {
  results: Result[] = [];
  isLoaded: boolean = false;

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    this.results = this.resultsService.getResults();
    this.isLoaded = true;
  }
}
