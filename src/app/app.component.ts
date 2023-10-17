import { Component } from '@angular/core';
import { GoogleCalendarService } from './shared/google-calendar.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scheduling-automation-app';
  events: Array<any> = [];

  constructor(private googleCalendarService: GoogleCalendarService) {}

  handleLoginWithGoogle() {
    this.googleCalendarService.handleAuthClick();
    this.googleCalendarService.currentEvents
      .pipe(
        map((data: any) => {
          return data.map((event: any) => {
            event.start.dateTime = new Date(event.start.dateTime).toISOString();
            event.end.dateTime = new Date(event.end.dateTime).toISOString();
            return event;
          });
        })
      )
      .subscribe((events: any) => this.events = events);
  }
}
