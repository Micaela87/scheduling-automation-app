import { Component, Input, OnInit } from '@angular/core';

type DateMetadata = {
  date: number,
  month: number,
  year: number,
  event?: any[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private _events!: any[];

  events!: Array<any>;

  calendarMatrixRows: number = 42; 
  weekDays: string[] = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];
  monthNames: string[] = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  yearOptions: number[] = [];
  monthDates: any = [];
  currentMonth!: string;
  currentMonthIndex!: number;
  currentDate!: number;
  currentYear!: number;

  constructor() { }

  ngOnInit(): void {
    const current = new Date();
    this.currentDate = current.getDate();
    this.currentMonthIndex = current.getMonth();
    this.currentMonth = this.monthNames[this.currentMonthIndex];
    this.currentYear = current.getFullYear();
    this.generateMonthDatesMatrix(this.currentDate, this.currentMonthIndex, this.currentYear);
    this.assignEventsToDates(this._events);
    const years = new Array(20);
    this.yearOptions = Array.from(years, (element, index) => (this.currentYear - 10) + index);
  }

  generateMonthDatesMatrix(date: number, month: number, year: number) {

    this.assignParams(date, month, year);

    let monthFirstWeekDay: number = new Date(`${year}-${month + 1}-01`).getDay();
    let currentMonthHuman: number = month + 1;

    const previousMonthLastDate = currentMonthHuman > 1 ? this.checkMonthLastDate((currentMonthHuman - 1), year) : 31;
    const currentMonthLastDate = this.checkMonthLastDate(currentMonthHuman, year);

    let x = this.checkWeekDay(monthFirstWeekDay) === 1 ? 1 : previousMonthLastDate - (this.checkWeekDay(monthFirstWeekDay) - 2);
    let previousMonth = x > 1 ? true : false;
    let currentMonth = x === 1 ? true : false;
    let nextMonth = false;

    for (let i = 0; i < this.calendarMatrixRows; i+=this.weekDays.length) {
      let weekDates: any[] = [];
      for (let y = 0; y < this.weekDays.length; y++) {

        const dateMetadata: DateMetadata = {
          date: x,
          month: this.getMonth(previousMonth, currentMonth, nextMonth),
          year: this.getYear(previousMonth, nextMonth)
        }

        weekDates.push(dateMetadata);

        if (x === previousMonthLastDate && i < this.weekDays.length) {
          x = 0;
          currentMonth = true;
          previousMonth = false;
        }

        if (x === currentMonthLastDate && i > this.weekDays.length) {
          x = 0;
          currentMonth = false;
          nextMonth = true;
        }

        x++;
        
      }

      this.monthDates.push(weekDates);
      
      weekDates = [];
    }
  }

  assignParams(date: number, month: number, year: number) {
    const monthLastDate = this.checkMonthLastDate((month + 1), year);
    this.currentDate = date > monthLastDate ? monthLastDate : date;
    this.currentMonthIndex = month;
    this.currentMonth = this.monthNames[this.currentMonthIndex];
    this.currentYear = year;
  }

  checkMonthLastDate(month: number, year: number): number {
    const longMonths: number[] = [1, 3, 5, 7, 8, 10, 12];
    const shortMonths: number[] = [11, 4, 6, 9];

    if (longMonths.includes(month)) {
      return 31;
    }

    if (shortMonths.includes(month)) {
      return 30;
    }
    
    return this.checkYearIsLeap(year) ? 29 : 28;
  }

  checkYearIsLeap(year: number) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  catchDate(date: DateMetadata) {

    if (this.currentMonthIndex !== date.month) {
      this.monthDates = [];
      this.generateMonthDatesMatrix(date.date, date.month, date.year);
    } else {
      this.assignParams(date.date, date.month, date.year);
    }

  }

  catchMonth() {
    this.monthDates = [];
    this.generateMonthDatesMatrix(this.currentDate, this.currentMonthIndex, this.currentYear);
    this.assignEventsToDates(this._events);
  }

  catchYear() {
    this.monthDates = [];
    this.generateMonthDatesMatrix(this.currentDate, this.currentMonthIndex, this.currentYear);
    this.assignEventsToDates(this._events);
  }

  checkWeekDay(weekDay: number): number {
    if (weekDay === 0) {
      return 7;
    }

    return weekDay;
  }

  getMonth(previousMonth: boolean, currentMonth: boolean, nextMonth: boolean): number {
    if (previousMonth) {
      const previousMonthIndex = this.currentMonthIndex === 0 ? 11 : this.currentMonthIndex - 1;
      return previousMonthIndex;
    }

    if (nextMonth) {
      const nextMonthIndex = this.currentMonthIndex === 11 ? 0 : this.currentMonthIndex + 1;
      return nextMonthIndex;
    }

    return this.currentMonthIndex;
  }

  getYear(previousMonth: boolean, nextMonth: boolean): number {
    if (previousMonth) {
      const year = this.currentMonthIndex === 0 ? this.currentYear - 1 : this.currentYear;
      return year;
    }

    if (nextMonth) {
      const year = this.currentMonthIndex === 11 ? this.currentYear + 1 : this.currentYear;
      return year;
    }

    return this.currentYear;
  }

  assignEventsToDates(events: any[]) {
    this.monthDates = events?.map((event: any) => {
      const startTime = event.start.dateTime;
      const eventFormattedDate = `${startTime.getDate()}/${startTime.getMonth()}/${startTime.getFullYear()}`;
      return this.monthDates.map((date: DateMetadata[]) => {
        return date.map((date: DateMetadata) => {
          const formattedDate = `${date.date}/${date.month}/${date.year}`;
          
          if (formattedDate === eventFormattedDate) {
            if (date.event) {
              date.event.push(event);
            } else {
              date.event = [event];
            }
            
            return date;
          }
  
          return date;
        });
      });
    })[0] || this.monthDates;

  }

}
