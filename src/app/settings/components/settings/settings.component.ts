import { Component, OnInit } from '@angular/core';
import { WeekSlotsService } from 'src/app/shared/services/week-slots.service';
import { WeekDaySlot } from 'src/app/types/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  weekDays: Array<WeekDaySlot> | undefined = [];

  constructor(private weekSlots: WeekSlotsService) { }

  async ngOnInit(): Promise<void> {
    this.weekDays = await this.weekSlots.getSlots();
  }

}
