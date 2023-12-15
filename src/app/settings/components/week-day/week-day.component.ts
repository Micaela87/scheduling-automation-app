import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { WeekSlotsService } from 'src/app/shared/services/week-slots.service';
import { Slot, WeekDaySlot } from 'src/app/types/types';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent implements OnInit {

  @Input() slot!: WeekDaySlot;
  @Input() slots!: Array<Slot>;

  editSlot: boolean = false;
  hours: Array<undefined> = new Array(24);

  constructor(
    private weekSlotsService: WeekSlotsService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {}

  async toggleAvailability(slot: Slot) {

    const index = this.slots.indexOf(slot);
    this.slots[index].disabled = !this.slots[index].disabled;
    this.slot.slots = this.slots;

    await this.weekSlotsService.saveSlot(this.slot.id, this.slot);
    
  }

  async saveChanges(e: Event) {
    e.stopPropagation();

    if (!(this.checkSlot())) {
      return;
    }

    this.slot.slots = this.slots;
    await this.weekSlotsService.saveSlot(this.slot.id, this.slot);
    this.notificationService.showNotificationModal("success");
    const timeOut = setTimeout(() => {
      this.notificationService.showNotificationModal("");
      this.editSlot = !this.editSlot;
    }, 3000);
    
  }

  addSlot(e: Event) {
    e.stopPropagation();
    this.slots.push({ start: "0", end: "0", disabled: false});
  }

  deleteSlot(slot: Slot) {
    this.slots.splice(this.slots.indexOf(slot), 1);
  }

  checkSlot() {
    const result = this.slots.every((slot: Slot) => slot.start < slot.end);
    if (!result) {
      this.notificationService.showNotificationModal("error", "L'orario di fine dello slot di diponibilità non può essere uguale o inferiore all'orario di inizio");
      const timeOut = setTimeout(() => {
        this.notificationService.showNotificationModal("");
      }, 4000);
    }

    return result;
  }

}
