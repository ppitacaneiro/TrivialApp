import { Player } from './../interfaces/player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private player: Player;

  constructor() {}

  setPlayer(player: Player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }
}
