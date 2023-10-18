import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  weekDays: string[] = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  dates: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    this.calculateWeekDates(today);
  }

  calculateWeekDates(today: Date) {
    const weekDay = today.getDay() === 0 ? 7 : today.getDay();
    const startingPoint = today.getDate() - weekDay + 1;

    for (let i = 0; i < 7; i++) {
      this.dates.push(startingPoint + i);
    }

    console.log(this.dates);
  }

}
