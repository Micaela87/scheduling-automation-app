import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { GoogleCalendarService } from './services/google-calendar.service';
import { WeekSlotsService } from './services/week-slots.service';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationService } from './services/notification.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [GoogleCalendarService, WeekSlotsService, NotificationService],
  exports: [HeaderComponent, FooterComponent, ModalComponent]
})
export class SharedModule { }
