import { Injectable } from '@angular/core';
import { WeekDaySlot } from 'src/app/types/types';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class WeekSlotsService {

  constructor(private notificationService: NotificationService) { }

  async getSlots(): Promise<Array<WeekDaySlot> | undefined> {

    let result: Promise<Array<WeekDaySlot>> | undefined = undefined;

    try {

      const response = await fetch("http://localhost:3000/slots");

      if (response.ok) {
        result = response.json();
      }

    } catch(err) {
      console.error(err);
      this.notificationService.showNotificationModal("error");
    }

    return result;
  }

  async saveSlot(id: number, payload: WeekDaySlot): Promise<WeekDaySlot | undefined> {

    let result: Promise<WeekDaySlot> | undefined = undefined;

    try {

      const response = await fetch(`http://localhost:3000/slots/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.ok) {
        result = response.json();
      }

    } catch(err) {
      console.error(err);
      this.notificationService.showNotificationModal("error");
    }

    return result;
  }

}
