export const routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    }
]