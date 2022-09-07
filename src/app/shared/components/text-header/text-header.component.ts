import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-header',
  templateUrl: './text-header.component.html',
  styleUrls: ['./text-header.component.scss'],
})
export class TextHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {}

  ngOnInit() {}
}
