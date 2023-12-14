export interface WeekDaySlot {
    id: number;
    weekday: string;
    slots: Array<Slot>
}

export interface Slot {
    start: string;
    end: string;
    disabled: boolean;
}