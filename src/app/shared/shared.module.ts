import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { GoogleCalendarService } from './services/google-calendar.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [GoogleCalendarService],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
