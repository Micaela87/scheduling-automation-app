import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './routing.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
