import type { OverviewCriteria } from '$lib/UIdata/types';
import { writable } from 'svelte/store';

type CalendarSettingsType = {
  view: 'week' | 'day';
};

const initialCalendarSettings: CalendarSettingsType = {
  view: 'week',
};

export const CalendarSettings = writable<CalendarSettingsType>(
  initialCalendarSettings
);

type OverviewSettingsType = {
  criteria: OverviewCriteria;
  ascending: boolean;
  cubes: boolean;
  grouped: boolean;
};

const initialMealOVSettings: OverviewSettingsType = {
  criteria: 'name',
  ascending: true,
  cubes: true,
  grouped: true,
};

export const MealOverviewSettings = writable<OverviewSettingsType>(
  initialMealOVSettings
);

const initialRestOVSettings: OverviewSettingsType = {
  criteria: 'name',
  ascending: true,
  cubes: true,
  grouped: true,
};

export const RestOverViewSettings = writable<OverviewSettingsType>(
  initialRestOVSettings
);
