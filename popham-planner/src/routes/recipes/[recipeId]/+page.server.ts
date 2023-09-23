import { deleteRecipe, getRecipeById, type TRecipe } from '$lib/db/recipes';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const recipe = await getRecipeById(params.recipeId);

  return {
    recipe: JSON.parse(JSON.stringify(recipe)) as TRecipe,
  };
}

export const actions = {
  default: async (event) => {
    deleteRecipe(event.params.recipeId);
    throw redirect(301, '/recipes');
  },
};
