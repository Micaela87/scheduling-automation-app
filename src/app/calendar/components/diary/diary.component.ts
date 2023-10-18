import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  private _events!: Array<any>;

  @Input() set events(events: any[]) {
    console.log(events);
    if (events?.length) {
      this._events = events;
      this.associateEventsToWeekDays(events);
    }
  }

  weekDays: string[] = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  dates: { date: number, event?: any }[] = [];
  month!: number;
  year!: number;

  constructor() { }

  ngOnInit(): void {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.calculateWeekDates(today);
  }

  calculateWeekDates(today: Date) {
    const weekDay = today.getDay() === 0 ? 7 : today.getDay();
    const startingPoint = today.getDate() - weekDay + 1;

    for (let i = 0; i < 7; i++) {
      this.dates.push({ date: startingPoint + i });
    }

  }

  associateEventsToWeekDays(events: any[]) {
    this.dates = this.dates.map((date: { date: number, event?: any }) => {
      const formattedDate = `${date.date}/${this.month}/${this.year}`;

      return events.map((event: any) => {
        const startTime = event.start.dateTime;
        const eventFormattedDate = `${startTime.getDate()}/${startTime.getMonth()}/${startTime.getFullYear()}`;

        if (formattedDate === eventFormattedDate) {
          
          if (date?.event.length) { date.event.push(event) }
          else { date.event = [event] }
        }

        return date;
      })[0];  
    }).flat();

    console.log(this.dates);
  }

}
