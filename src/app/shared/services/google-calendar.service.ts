import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var gapi: any;
declare var google: any;

export function initWithDependencyFactory(googleCalendarService: GoogleCalendarService) {
  return () => {
    return import('../../../environments/environment')
      .then((vars) => {
        const environment = vars.environment;
        Object.assign(googleCalendarService, environment);
        gapi.load('client', async () => {
          try {

            await gapi.client.init({
              apiKey: environment.apiKey,
              discoveryDocs: [environment.discoveryDoc],
            });
      
          } catch(err) {
            console.log(err);
          }
        });
        console.log('im here');
        googleCalendarService.gisLoaded();
      });
  };
}

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarService {

  private events = new BehaviorSubject([]);
  currentEvents = this.events.asObservable();

  private isLoggedIn = new BehaviorSubject(false);
  currentStatus = this.isLoggedIn.asObservable();

  apiKey!: string;
  discoveryDoc!: string;
  clientID!: string;
  scopes!: string | Array<string>;

  tokenClient: any = null;

  constructor() { }

  changeEvents(events: any) {
    this.events.next(events);
  }

  changeStatus(status: boolean) {
    this.isLoggedIn.next(status);
  }

  gisLoaded() {
    this.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: this.clientID,
      scope: this.scopes,
      callback: ''
    });
  }

  handleAuthClick() {

    this.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
  
      await this.listUpcomingEvents();
    }

    if (gapi.client.getToken() === null) {
      this.tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
      this.tokenClient.requestAccessToken({prompt: ''});
    }
  }

  async listUpcomingEvents() {
    let response;
    try {
      const request = {
        'calendarId': 'primary',
        'timeMin': (new Date('2023/01/01')).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 1000,
        'orderBy': 'startTime',
      };
      response = await gapi.client.calendar.events.list(request);
    } catch (err) {
      console.log(err);
      return;
    }

    this.changeEvents(response.result.items);
    this.changeStatus(true);
  }

}
