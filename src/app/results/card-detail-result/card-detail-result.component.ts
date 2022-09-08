import { Result } from './../../interfaces/result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail-result',
  templateUrl: './card-detail-result.component.html',
  styleUrls: ['./card-detail-result.component.scss'],
})
export class CardDetailResultComponent implements OnInit {
  @Input() result: Result;

  constructor() {}

  ngOnInit() {}
}
