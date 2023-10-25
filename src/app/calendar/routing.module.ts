import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: CalendarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class CalendarRoutingModule { }