import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleCalendarService, initWithDependencyFactory } from './shared/google-calendar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initWithDependencyFactory,
      deps: [GoogleCalendarService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
