import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { GoogleCalendarService } from 'src/app/shared/services/google-calendar.service';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {

  @Output() events: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor(private googleCalendarService: GoogleCalendarService) { }

  ngOnInit(): void {
  }

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
      .subscribe((events: any) => this.events.emit(events));
  }

}
