import type { MealPlanFormType, MealType } from '$lib/UIdata/types.js';
import { createMealPlan } from '$lib/db/mealPlans.js';
import { deleteMeal, getMealById } from '$lib/db/meals';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const meal = await getMealById(params.mealId);

  if (!meal) {
    throw redirect(301, '/meals');
  }

  return {
    meal: JSON.parse(JSON.stringify(meal)) as MealType
  };
}

export const actions = {
  delete: async ({ params }) => {
    deleteMeal(params.mealId);
    throw redirect(301, '/meals');
  },
  addMealPlan: async ({ url, request }) => {
    const data = await request.formData();
    const meal = data.get('id') as string;
    const date = data.get('date') as string;
    const mealType = data.get('mealType') as 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner';
    const planType = data.get('planType') as 'meal' | 'restaurant';

    const timestamp = new Date(date).getTime();

    const mealPlan: MealPlanFormType = {
      timestamp,
      planType,
      mealType,
      meal
    };

    await createMealPlan(mealPlan);
    throw redirect(301, url.pathname);
  }
};
