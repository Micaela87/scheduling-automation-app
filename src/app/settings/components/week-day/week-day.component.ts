import { Component, Input, OnInit } from '@angular/core';
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
  defaultStart: number = 9;
  defaultEnd: number = 13;

  constructor(private weekSlotsService: WeekSlotsService) { }

  ngOnInit(): void {}

  async toggleAvailability(slot: Slot) {

    const index = this.slots.indexOf(slot);
    this.slots[index].disabled = !this.slots[index].disabled;
    this.slot.slots = this.slots;

    await this.weekSlotsService.saveSlot(this.slot.id, this.slot);
    
  }

}
