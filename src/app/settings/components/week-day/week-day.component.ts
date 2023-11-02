import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent implements OnInit {

  @Input() day!: string;

  circleStyle: string = 'left: 2px';
  morning: { disabled: boolean, circleStyle: string } = { disabled: false, circleStyle: this.circleStyle };
  afternoon: { disabled: boolean, circleStyle: string } = { disabled: false, circleStyle: this.circleStyle };
  time: Array<{ time: string, disabled: boolean, circleStyle: string }> = [
    { 
      time: '9:00 - 13:00', 
      disabled: false, 
      circleStyle: this.circleStyle
    }, 
    {
      time: '14:00 - 18:00',
      disabled: false, 
      circleStyle: this.circleStyle
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleAvailability(time: string) {

    const hours = this.time.find((hour: any) => hour.time === time);
    hours?.circleStyle === 'left: 2px' ? hours!.circleStyle = 'right: 2px' : hours!.circleStyle = 'left: 2px';
    hours!.disabled = !hours?.disabled;

  }

}
