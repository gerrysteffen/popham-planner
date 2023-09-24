import type { MealType } from '$lib/UIdata/types';
import { getAllMeals } from '$lib/db/meals.js';

export async function load() {
  const meals = await getAllMeals();

  return {
    meals: JSON.parse(JSON.stringify(meals)) as MealType[],
  };
}
