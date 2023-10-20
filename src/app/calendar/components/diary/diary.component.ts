import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShowModalService } from '../../services/show-modal.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  private _events!: Array<any>;

  @Input() set events(events: any[]) {
    if (events?.length) {
      this._events = events;
      this.associateEventsToWeekDays(events);
    }
  }

  @Input() set selectedMonth(month: string) {
    if (month) {
      this.currentMonth = month;
      this.generateNewDates();
    }
  };

  @Input() set selectedYear(year: number) {
    if (year) {
      this.year = year;
      this.generateNewDates();
    }
  }

  weekDays: string[] = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
  monthNames: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  dates: { date: number, event?: any }[] = [];
  month!: number;
  year!: number;
  currentMonth!: string;
  today!: Date;

  constructor(public modalService: ShowModalService) { }

  ngOnInit(): void {
    this.today = new Date();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.currentMonth = this.monthNames[this.month];
    this.calculateWeekDates(this.today);
  }

  calculateWeekDates(today: Date) {
    const day = new Date('2000-01-01T23:59:59').getTime() - new Date('2000-01-01T00:00:00').getTime();
    const weekDay = today.getDay() === 0 ? 7 : today.getDay();
    const date = (today.getTime() - ((weekDay - 1) * day));
    let startingPoint = new Date(date).getDate();
    const endPoint = this.checkMonth();

    for (let i = 0; i < 7; i++) {
      if (startingPoint > endPoint) {
        startingPoint = 1;
      }
      this.dates.push({ date: startingPoint });
      startingPoint++;
    }

  }

  associateEventsToWeekDays(events: any[]) {

    if (!events?.length) return;
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
  }

  goBack() {
    const day = new Date('2000-01-01T23:59:59').getTime() - new Date('2000-01-01T00:00:00').getTime();
    this.today = new Date(this.today.getTime() - (day * 7));
    this.dates = [];
    this.currentMonth = this.monthNames[this.today.getMonth()];
    this.year = this.today.getFullYear();
    this.calculateWeekDates(this.today);
    this.associateEventsToWeekDays(this._events);
  }

  goForth() {
    const day = new Date('2000-01-01T23:59:59').getTime() - new Date('2000-01-01T00:00:00').getTime();
    this.today = new Date(this.today.getTime() + (day * 7));
    this.dates = [];
    this.calculateWeekDates(this.today);
    this.currentMonth = this.monthNames[this.today.getMonth()];
    this.year = this.today.getFullYear();
    this.associateEventsToWeekDays(this._events);
  }

  generateNewDates() {
    console.log(this.today);
    const index = this.monthNames.indexOf(this.currentMonth) + 1;
    const day = this.today.getDate() < 10 ? '0' + this.today.getDate() : this.today.getDate();
    const date = `${this.year}-${index < 10 ? '0' + index : index}-${day}T00:00:00`;
    this.today = new Date(date);
    this.dates = [];
    this.calculateWeekDates(this.today);
    this.associateEventsToWeekDays(this._events);
  }

  checkMonth() {
    const longMonths = ['Gennaio', 'Marzo', 'Maggio', 'Luglio', 'Agosto', 'Ottobre', 'Dicembre'];
    const shortMonths = ['Novembre', 'Aprile', 'Giugno', 'Settembre'];

    if (longMonths.includes(this.currentMonth)) return 31;
    if (shortMonths.includes(this.currentMonth)) return 30;
    return (this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)) ? 29 : 28;
  }

}
