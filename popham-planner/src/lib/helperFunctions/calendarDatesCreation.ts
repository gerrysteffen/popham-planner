import type { MealDateType } from '$lib/UIdata/types';

const oneDay = 1000 * 60 * 60 * 24;

export function createInitialCalendar(
  current: number,
  pastWeeks: number,
  futureWeeks: number
) {
  const initialCalendar = new Array(7 * (1 + futureWeeks - pastWeeks))
    .fill('')
    .map(
      (_, i) =>
        ({
          date: new Date(current + (i + 7 * pastWeeks) * oneDay),
          lunch: [],
          dinner: [],
        } as MealDateType)
    );
  return {
    'week-1': initialCalendar.slice(0, 7),
    week0: initialCalendar.slice(7, 14),
    week1: initialCalendar.slice(14, 21),
  };
}

export function addCalendarWeeks(current: number, weekDiff: number) {
  return new Array(7).fill('').map(
    (el, i) =>
      ({
        date: new Date(current + (i + weekDiff * 7) * oneDay),
        lunch: [],
        dinner: [],
      } as MealDateType)
  );
}
