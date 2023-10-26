import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { GoogleButtonComponent } from './components/google-button/google-button.component';
import { DiaryComponent } from './components/diary/diary.component';
import { YearsModalComponent } from './components/years-modal/years-modal.component';
import { MonthsModalComponent } from './components/months-modal/months-modal.component';
import { ShowModalService } from './services/show-modal.service';
import { CalendarRoutingModule } from './routing.module';



@NgModule({
  declarations: [CalendarComponent, GoogleButtonComponent, DiaryComponent, YearsModalComponent, MonthsModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule
  ],
  providers: [ShowModalService],
  exports: [CalendarComponent]
})
export class CalendarModule { }
