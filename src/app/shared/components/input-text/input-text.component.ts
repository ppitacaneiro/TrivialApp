import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() label: string;
  @Input() formCtrlName: string;
  @Input() type: string;
  @Input() parentGroup: FormGroup;

  constructor() {}

  ngOnInit() {}

  showErrorMessage(errors: any) {
    if (errors.hasOwnProperty('required')) return 'This field is required';
    if (errors.hasOwnProperty('email')) return 'E-mail is not valid';
  }
}
