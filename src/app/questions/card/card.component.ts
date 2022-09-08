import { Question } from './../../interfaces/question';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() question: Question;
  @Output() selectAnswerEvent = new EventEmitter();
  selectedIndex: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.selectedIndex = -1;
  }

  onClick(answer: string, question: Question, numAnswer: number) {
    this.selectedIndex = numAnswer;
    this.selectAnswerEvent.emit({
      answerSelected: answer,
      question: question,
    });
  }
}
