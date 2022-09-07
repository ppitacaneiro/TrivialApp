import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOptionsPage } from './game-options.page';

const routes: Routes = [
  {
    path: '',
    component: GameOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOptionsPageRoutingModule {}
