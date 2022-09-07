import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameOptionsPageRoutingModule } from './game-options-routing.module';

import { GameOptionsPage } from './game-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameOptionsPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [GameOptionsPage],
})
export class GameOptionsPageModule {}
