import { SelectComponent } from './components/select/select.component';
import { HeaderComponent } from './components/header/header.component';
import { TextHeaderComponent } from './components/text-header/text-header.component';
import { GenericButtonComponent } from './components/generic-button/generic-button.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputTextComponent,
    GenericButtonComponent,
    TextHeaderComponent,
    HeaderComponent,
    SelectComponent,
  ],
  imports: [FormsModule, CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    InputTextComponent,
    GenericButtonComponent,
    TextHeaderComponent,
    HeaderComponent,
    SelectComponent,
  ],
})
export class SharedModule {}
