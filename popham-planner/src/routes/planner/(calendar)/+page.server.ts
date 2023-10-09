import type { MealPlanType } from '$lib/UIdata/types';
import { getMealPlansByDate } from '$lib/db/mealPlans.js';

export async function load({ url }) {
  let pastWeeks: number = Number(url.searchParams.get('pw'));
  let futureWeeks: number = Number(url.searchParams.get('fw'));

  const today = new Date().setHours(0, 0, 0, 0); // 1h correction to make sure Summer time doesn't affect
  const timeMin =
    today + pastWeeks * 7 * 24 * 60 * 60 * 1000 - 24 * 60 * 60 * 1000;  // +1d in case effect of Summer time
  const timeMax = today + (1 + futureWeeks) * 7 * 24 * 60 * 60 * 1000;

  let mealPlans = await getMealPlansByDate(timeMin, timeMax);

  // manual approach to reloading - tbd if necessary
  // https://kit.svelte.dev/docs/load#rerunning-load-functions-manual-invalidation

  return {
    mealPlans: JSON.parse(JSON.stringify(mealPlans)) as MealPlanType[],
  };
}
