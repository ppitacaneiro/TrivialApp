import { NavigationExtras, Router } from '@angular/router';
import { GameOptions } from './../interfaces/game-options';
import { MessageService } from './../services/message.service';
import { Category } from './../interfaces/category';
import { OpenTriviaDbService } from './../services/open-trivia-db.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.page.html',
  styleUrls: ['./game-options.page.scss'],
})
export class GameOptionsPage implements OnInit, OnDestroy {
  gameOptionsForm: FormGroup;
  categories: Category[] = [];
  categoriesSuscription: Subscription;
  isLoaded: boolean;
  gameOptions: GameOptions = {
    amount: 0,
    difficulty: '',
    categoryId: 0,
  };

  // TODO : using Enums, create enum difficultyLevels file in shared folder
  difficultyLevels: any[] = [
    {
      id: 'easy',
      name: 'Easy',
    },
    {
      id: 'medium',
      name: 'Medium',
    },
    {
      id: 'hard',
      name: 'Hard',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private openTriviaDbService: OpenTriviaDbService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoaded = false;
    this.getCategories();
    this.initForm();
  }

  getCategories() {
    this.categoriesSuscription = this.openTriviaDbService
      .getCategories()
      .subscribe(
        (response) => {
          this.categories = response['trivia_categories'];
          this.isLoaded = true;
        },
        (error) => {
          this.messageService.presentToast(error.message);
          this.isLoaded = true;
          // TODO : on confirm navigate to home
        }
      );
  }

  initForm() {
    this.gameOptionsForm = this.formBuilder.group({
      mumberOfQuestions: new FormControl('', [Validators.required]),
      selectCategory: new FormControl('', [Validators.required]),
      selectDifficultyLevels: new FormControl('', [Validators.required]),
    });
  }

  ngOnDestroy() {
    this.categoriesSuscription.unsubscribe();
  }

  handleGameOptions() {
    // TODO : validate form, show messages to user, category, number of questions and difficulty levels are required
    if (this.gameOptionsForm.invalid) {
      this.messageService.presentToast('Form is invalid');
      return;
    }

    this.gameOptions.amount =
      this.gameOptionsForm.controls.mumberOfQuestions.value;
    this.gameOptions.categoryId =
      this.gameOptionsForm.controls.selectCategory.value;
    this.gameOptions.difficulty =
      this.gameOptionsForm.controls.selectDifficultyLevels.value;

    this.startTriviaGame(this.gameOptions);
  }

  startTriviaGame(gameOptions: GameOptions) {
    this.router.navigate(['questions'], {
      queryParams: {
        amount: gameOptions.amount,
        difficulty: gameOptions.difficulty,
        category: gameOptions.categoryId,
      },
    });
  }
}
