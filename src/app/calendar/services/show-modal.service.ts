import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {

  modal: string = 'none';

  constructor() { }

  displayModal(modal: string) {
    console.log(modal);
    this.modal = modal;
    console.log(this.modal);
  }
}
