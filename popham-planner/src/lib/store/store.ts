import { writable } from 'svelte/store';

type CalendarSettingsType = {
  view: 'week' | 'day';
};

export const CalendarSetting = writable<CalendarSettingsType>({
  view: 'week',
});
