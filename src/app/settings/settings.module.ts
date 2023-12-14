import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './routing.module';
import { WeekDayComponent } from './components/week-day/week-day.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SettingsComponent, WeekDayComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
