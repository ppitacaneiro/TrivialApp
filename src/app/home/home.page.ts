import { PlayerService } from './../services/player.service';
import { Player } from './../interfaces/player';
import { TriviaApiService } from './../services/trivia-api.service';
import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private triviaApiService: TriviaApiService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  start() {
    if (this.loginForm.invalid) {
      this.messageService.presentToast('Form is invalid');
      return;
    }

    const player: Player = {
      firstName: this.loginForm.controls.firstName.value,
      lastName: this.loginForm.controls.lastName.value,
      age: +this.loginForm.controls.age.value,
      email: this.loginForm.controls.email.value,
    };

    // TODO : Unsuscribe observable
    // TODO : send player data to .NET CORE API
    // Handle HTTP errors
    this.triviaApiService.savePlayerData(player).subscribe(
      (response) => {
        player.id = response.id;
        this.playerService.setPlayer(player);
      },
      (error) => {
        this.messageService.presentToast(error.message);
      }
    );

    this.router.navigate(['game-options']);
  }
}
