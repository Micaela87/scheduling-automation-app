import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-months-modal',
  templateUrl: './months-modal.component.html',
  styleUrls: ['./months-modal.component.scss']
})
export class MonthsModalComponent implements OnInit {

  month!: number;
  currentMonth!: string;
  monthNames: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  constructor() { }

  ngOnInit(): void {
    this.month = new Date().getMonth()
    this.currentMonth = this.monthNames[this.month];
  }

}
