import { Component, Input, OnInit } from '@angular/core';
import { ShowModalService } from '../../services/show-modal.service';

type DateMetadata = {
  date: number,
  month: number,
  year: number,
  event?: any[]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(public modalService: ShowModalService) { }

  ngOnInit(): void {
    
  }

}
