import {
  getMealById,
  updateMeal,
  type MealType,
  type MealTypeForm,
} from '$lib/db/meals';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const meal = await getMealById(params.mealId);

  return {
    meal: JSON.parse(JSON.stringify(meal)) as MealType,
  };
}

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const image_url = data.get('image_url') as string;
    const mainCategory = data.get('mainCategory') as string;

    const meal: MealTypeForm = {
      name,
      description,
      image_url,
      tags: [],
      mainCategory,
      categories: [],
    };
    await updateMeal(params.mealId, meal);
    throw redirect(301, `/meals/${params.mealId}`);
  },
};
