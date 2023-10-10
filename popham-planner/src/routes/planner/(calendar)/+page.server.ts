import type { MealPlanType } from '$lib/UIdata/types';
import { getMealPlansByDate } from '$lib/db/mealPlans.js';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
  let pastWeeks: number = Number(url.searchParams.get('pw'));
  let futureWeeks: number = Number(url.searchParams.get('fw'));

  if (pastWeeks === 0 || futureWeeks === 0) {
    throw redirect(301, '/planner?pw=-2&fw=3#week0');
  }

  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1,
    1
  ).getTime();
  const timeMin =
    monday + pastWeeks * 7 * 24 * 60 * 60 * 1000 - 24 * 60 * 60 * 1000; // +1d in case effect of Summer time
  const timeMax = monday + (1 + futureWeeks) * 7 * 24 * 60 * 60 * 1000;

  let mealPlans = await getMealPlansByDate(timeMin, timeMax);

  // manual approach to reloading - tbd if necessary
  // https://kit.svelte.dev/docs/load#rerunning-load-functions-manual-invalidation

  return {
    mealPlans: JSON.parse(JSON.stringify(mealPlans)) as MealPlanType[],
  };
}
