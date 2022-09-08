import { Result } from './../interfaces/result';
import { Question } from './../interfaces/question';
import { MessageService } from './../services/message.service';
import { OpenTriviaDbService } from './../services/open-trivia-db.service';
import { GameOptions } from './../interfaces/game-options';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  isLoaded: boolean;
  questions: Question[] = [];
  results: Result[] = [];
  isAnswered: boolean = false;
  counter: number = 0;
  gameOptions: GameOptions = {
    amount: 0,
    difficulty: '',
    categoryId: 0,
  };
  actualQuestion: Question = {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [],
    all_answers: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private openTriviaDbService: OpenTriviaDbService,
    private messageService: MessageService
  ) {}

  // TODO : Time counter. Time to complete trivia
  // Calculate Score

  ngOnInit() {
    this.isLoaded = false;
    this.getQueryParams();
    this.getQuestions();
  }

  getQuestions() {
    // TODO
    // unsuscribe on destroy

    this.openTriviaDbService.getQuestions(this.gameOptions).subscribe(
      (response) => {
        this.isLoaded = true;
        this.questions = response['results'];
        this.getActualQuestion();
      },
      (error) => {
        this.messageService.presentToast(error.message);
        this.isLoaded = true;
      }
    );
  }

  getQueryParams() {
    // TODO
    // using combine latest rxjs operator
    // unsuscribe on destroy
    this.activatedRoute.queryParams.subscribe((_params) => {
      this.gameOptions.amount = _params.amount;
      this.gameOptions.categoryId = _params.category;
      this.gameOptions.difficulty = _params.difficulty;
    });
  }

  getActualQuestion() {
    this.actualQuestion = this.questions[this.counter];
    this.actualQuestion.all_answers = this.generateAllAnswers();
  }

  nextQuestion() {
    if (!this.isAnswered) {
      this.messageService.presentToast('You must provide an answer');
      return;
    }

    this.counter++;
    this.getActualQuestion();
    this.isAnswered = false;
  }

  generateAllAnswers() {
    const answers = [];
    const totalAnswers = 4;
    let indexCorrectAnswer = this.randomIntFromInterval(1, totalAnswers - 1);
    let j = 0;
    for (let i = 0; i < totalAnswers; i++) {
      if (i !== indexCorrectAnswer) {
        answers[i] = this.actualQuestion.incorrect_answers[j];
        j++;
      } else {
        answers[indexCorrectAnswer] = this.actualQuestion.correct_answer;
      }
    }
    return answers;
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isTriviaFinished() {
    return this.questions.length - 1 === this.counter;
  }

  handleSelectAnswer(event) {
    this.isAnswered = true;
    this.setResults(event.question, event.answerSelected);
  }

  setResults(question: Question, answer: string) {
    let result: Result = {
      question: question,
      isAnswerCorrect: question.correct_answer === answer ? true : false,
    };
    this.results.push(result);
  }

  getResults() {
    console.log(this.results);
  }
}
