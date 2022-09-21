import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingsPageRoutingModule } from './rankings-routing.module';

import { RankingsPage } from './rankings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingsPageRoutingModule,
    SharedModule,
  ],
  declarations: [RankingsPage],
})
export class RankingsPageModule {}
