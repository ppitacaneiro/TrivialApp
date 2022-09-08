import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-result',
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss'],
})
export class ItemResultComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() num: number;
  @Input() colorIcon: string;

  constructor() {}

  ngOnInit() {}
}
