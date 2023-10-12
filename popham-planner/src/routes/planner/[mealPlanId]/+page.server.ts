import type { MealPlanType } from '$lib/UIdata/types.js';
import { deleteMealPlan, getMealPlanById } from '$lib/db/mealPlans.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const mealPlan = await getMealPlanById(params.mealPlanId);

  if (!mealPlan) {
    throw redirect(301, '/meals');
  }

  return {
    mealPlan: JSON.parse(JSON.stringify(mealPlan)) as MealPlanType
  };
}

export const actions = {
  delete: async ({ params }) => {
    deleteMealPlan(params.mealPlanId);
    throw redirect(301, '/planner?pw=-1&fw=1#week0');
  }
};
