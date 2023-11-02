import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './routing.module';
import { WeekDayComponent } from './components/week-day/week-day.component';



@NgModule({
  declarations: [SettingsComponent, WeekDayComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
