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
    'week-1': initialCalendar.slice(0, (-7 * pastWeeks)),
    week0: initialCalendar.slice((-7 * pastWeeks), (-7 * pastWeeks + 7)),
    week1: initialCalendar.slice((-7 * pastWeeks + 7), (-7 * pastWeeks + 7*2)),
    week2: initialCalendar.slice((-7 * pastWeeks + 7*2), (-7 * pastWeeks + 7*3)),
    week3: initialCalendar.slice((-7 * pastWeeks + 7*3), (-7 * pastWeeks + 7*4)),
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
