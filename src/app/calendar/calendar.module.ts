import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
