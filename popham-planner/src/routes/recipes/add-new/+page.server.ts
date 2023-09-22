import { createRecipe, type TRecipeForm } from '$lib/db/recipes';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const image_url = data.get('image_url') as string;
    const mainCategory = data.get('mainCategory') as string;

    const recipe: TRecipeForm = {
      name,
      description,
      image_url,
      tags: [],
      mainCategory,
      categories: [],
    };
    createRecipe(recipe);
  },
};
