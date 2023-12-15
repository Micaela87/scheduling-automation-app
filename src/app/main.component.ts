import { Component } from '@angular/core';

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
