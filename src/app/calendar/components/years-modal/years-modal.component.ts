import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-years-modal',
  templateUrl: './years-modal.component.html',
  styleUrls: ['./years-modal.component.scss']
})
export class YearsModalComponent implements OnInit {

  @Output() selectedYear: EventEmitter<number> = new EventEmitter<number>();

  years: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 2023; i > (2023 - 9); i--) {
      this.years.push(i);
    }
  }

}
