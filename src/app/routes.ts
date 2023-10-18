import { CalendarComponent } from "./calendar/components/calendar/calendar.component";
import { HomeComponent } from "./home/components/home/home.component";

export const routes = [
    { path: "", component: HomeComponent },
    { path: "calendar", component: CalendarComponent },
    // { path: "settings", component: SettingsComponent }
]