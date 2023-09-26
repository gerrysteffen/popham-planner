import type { MealFormType } from '$lib/UIdata/types.js';
import { createMeal } from '$lib/db/meals';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const source = data.get('source') as string;
    const image_url = data.get('image_url') as string;
    const mainCategory = data.get('mainCategory') as string;
    const categories = data.getAll('categories') as string[];
    const tags = data.getAll('tags') as string[];

    const meal: MealFormType = {
      name,
      description,
      source,
      image_url,
      mainCategory,
      categories: categories,
      tags: tags,
    };
    const newMeal = await createMeal(meal);
    throw redirect(301, `/meals/${newMeal?._id || ''}`);
  },
};
