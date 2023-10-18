import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { GoogleCalendarService } from './services/google-calendar.service';
import { DiaryComponent } from './components/diary/diary.component';



@NgModule({
  declarations: [CalendarComponent, GoogleButtonComponent, DiaryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [GoogleCalendarService],
  exports: [CalendarComponent]
})
export class CalendarModule { }
