import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { GoogleCalendarService, initWithDependencyFactory } from './calendar/services/google-calendar.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CalendarModule } from './calendar/calendar.module';
import { HomeComponent } from './home/components/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes),
    CalendarModule
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
