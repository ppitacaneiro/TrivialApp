import { CardDetailResultComponent } from './card-detail-result/card-detail-result.component';
import { DetailResultsComponent } from './detail-results/detail-results.component';
import { ItemResultComponent } from './item-result/item-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ResultsPage,
    ItemResultComponent,
    DetailResultsComponent,
    CardDetailResultComponent,
  ],
})
export class ResultsPageModule {}
