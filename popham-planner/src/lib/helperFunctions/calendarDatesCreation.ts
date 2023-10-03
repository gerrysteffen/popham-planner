import type { MealDateType } from '$lib/UIdata/types';

const oneDayInMs = 1000 * 60 * 60 * 24;
const oneWeekInMs = oneDayInMs * 7;

export function msSinceMidnight(d: number) {
  const e = new Date(d);
  return d - e.setHours(0, 0, 0, 0) + 1000 * 60 * 60; // addition of an hour as summer time work around
}

const timestamp = Date.now();
export const mockMealDate: MealDateType = {
  timestamp: timestamp,
  lunch: [],
  dinner: [],
};

export function createInitialCalendar(
  current: number,
  pastWeeks: number,
  futureWeeks: number
) {
  const initialCalendar = new Array(7 * (1 + futureWeeks - pastWeeks))
    .fill('')
    .map((_, i) => {
      return {
        timestamp: current + (i + 7 * pastWeeks) * oneDayInMs,
        lunch: [],
        dinner: [],
      } as MealDateType;
    });
  return {
    'week-1': initialCalendar.slice(0, -7 * pastWeeks),
    week0: initialCalendar.slice(-7 * pastWeeks, -7 * pastWeeks + 7),
    week1: initialCalendar.slice(-7 * pastWeeks + 7, -7 * pastWeeks + 7 * 2),
  };
}

export function addCalendarWeeks(current: number, weekDiff: number) {
  return new Array(7).fill('').map((el, i) => {
    return {
      timestamp: current + (i + weekDiff * 7) * oneDayInMs,
      lunch: [],
      dinner: [],
    } as MealDateType;
  });
}

export function calculateWeekAndDay(today: number, date: number) {
  const difference = date - today;
  const week = Math.floor(difference / oneWeekInMs);
  const day = Math.floor((difference - week * oneWeekInMs) / oneDayInMs);
  return { week, day };
}
