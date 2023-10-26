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

  constructor() {}

  
}
