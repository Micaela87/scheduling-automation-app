import { Component } from '@angular/core';
import { GoogleCalendarService } from './shared/services/google-calendar.service';
import { map } from 'rxjs';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'scheduling-automation-app';
  events: Array<any> = [];
  loggedIn: boolean = false;

  constructor(private googleCalendarService: GoogleCalendarService) {}

  handleLoginWithGoogle() {
    this.googleCalendarService.handleAuthClick();
    this.googleCalendarService.currentEvents
      .pipe(
        map((data: any) => {
          return data.map((event: any) => {
            event.start.dateTime = event.start.dateTime === undefined ? new Date(event.start.date) : new Date(event.start.dateTime);
            event.end.dateTime = event.end.dateTime === undefined ? new Date(event.end.date) : new Date(event.end.dateTime);
            return event;
          });
        })
      )
      .subscribe((events: any) => this.events = events);
    this.googleCalendarService.currentStatus.subscribe((status: boolean) => this.loggedIn = status);
  }
}
