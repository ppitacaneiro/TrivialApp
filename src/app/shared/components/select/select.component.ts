import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() selectValues: any;
  @Input() label: string;
  @Input() formCtrlName: string;
  @Input() parentGroup: FormGroup;
  @Output() onSelect = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleSelect(event) {
    this.onSelect.emit(event);
  }
}
