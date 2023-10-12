import type { CalendarType, MealDateType } from '$lib/UIdata/types';

const oneDayInMs = 1000 * 60 * 60 * 24;
const oneWeekInMs = oneDayInMs * 7;

// export function msSinceMidnight(d: number) {
//   const e = new Date(d);
//   return d - e.setHours(0, 0, 0, 0) - 1000 * 60 * 60; // addition of an hour as summer time work around
// }

const timestamp = Date.now();
export const mockMealDate: MealDateType = {
  timestamp: timestamp,
  lunch: [],
  dinner: []
};

export function createInitialCalendar(today: number, pastWeeks: number, futureWeeks: number) {
  const calendarDays = new Array(7 * (1 + futureWeeks - pastWeeks)).fill('').map((_, i) => {
    return {
      timestamp: today + (i - 7 * -pastWeeks) * oneDayInMs,
      lunch: [],
      dinner: []
    } as MealDateType;
  });
  const calendar: CalendarType = {};
  for (let i = pastWeeks; i <= futureWeeks; i++) {
    calendar[`week${i}`] = calendarDays.splice(0, 7);
  }
  return calendar;
}

export function addCalendarWeeks(today: number, weekDiff: number) {
  return new Array(7).fill('').map((el, i) => {
    return {
      timestamp: today + (i + weekDiff * 7) * oneDayInMs,
      lunch: [],
      dinner: []
    } as MealDateType;
  });
}

export function calculateWeekAndDay(today: number, date: number) {
  const difference = date - today;
  const week = Math.floor(difference / oneWeekInMs);
  const day = Math.floor((difference - week * oneWeekInMs) / oneDayInMs);
  return { week, day };
}
