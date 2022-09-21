import { Player } from './player';

export interface Ranking {
  id: number;
  totalScore: number;
  playerId: number;
  player: Player;
}
