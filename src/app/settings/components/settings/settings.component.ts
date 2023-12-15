import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { WeekSlotsService } from 'src/app/shared/services/week-slots.service';
import { Slot, WeekDaySlot } from 'src/app/types/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  weekDays: Array<WeekDaySlot> | undefined = [];

  constructor(
    private weekSlots: WeekSlotsService,
    public notificationService: NotificationService
  ) { }

  async ngOnInit(): Promise<void> {
    this.weekDays = await this.weekSlots.getSlots();
    this.weekDays?.map((weekDaySlot: WeekDaySlot) => weekDaySlot.slots.sort(this.compareFn));
  }

  compareFn(a: Slot, b: Slot) {
    if (a.start < b.start) {
      return -1;
    } 
    
    if (a.start > b.start) {
      return 1;
    }
    
    return 0;
  }

}
