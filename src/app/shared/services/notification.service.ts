import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  action: "error" | "success" | "" = "";
  messageMap: { [action: string]: string } = {
    "error": "Si è verificato un errore durante l'operazione",
    "success": "L'operazione è avvenuta con successo"
  };

  iconMap: { [action: string]: string } = {
    "error": "error",
    "success": "success"
  };

  customMessage: string = "";
  icon: string = "";
  message: string = "";

  constructor() { }

  showNotificationModal(action: "error" | "success" | "", customMessage: string = "") {
    this.action = action;
    this.customMessage = customMessage;
    this.icon = this.iconMap[this.action];
    this.message = this.messageMap[this.action];
  }

}
