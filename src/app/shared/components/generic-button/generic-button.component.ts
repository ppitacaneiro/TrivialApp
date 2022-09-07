import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent implements OnInit {
  @Input() label: string;
  @Input() isDisabled: boolean;
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clickEvent.emit();
  }
}
