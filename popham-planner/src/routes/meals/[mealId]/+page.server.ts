import { deleteMeal, getMealById, type MealType } from '$lib/db/meals';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const meal = await getMealById(params.mealId);

  if (!meal) {
    throw redirect(301, '/meals');
  }

  return {
    meal: JSON.parse(JSON.stringify(meal)) as MealType,
  };
}

export const actions = {
  default: async ({params}) => {
    deleteMeal(params.mealId);
    throw redirect(301, '/meals');
  },
};
