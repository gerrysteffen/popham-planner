import { createMeal, type MealTypeForm } from '$lib/db/meals';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
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
    const newMeal = await createMeal(meal);
    throw redirect(301, `/meals/${newMeal._id}`);
  },
};
