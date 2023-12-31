import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { GoogleCalendarService, initWithDependencyFactory } from './shared/services/google-calendar.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CalendarModule } from './calendar/calendar.module';
import { SettingsModule } from './settings/settings.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes),
    CalendarModule,
    SettingsModule,
    HomeModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initWithDependencyFactory,
      deps: [GoogleCalendarService],
      multi: true
    },
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
