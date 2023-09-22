import { deleteRecipe, getRecipeById, type TRecipe } from '$lib/db/recipes';

export async function load({ params }) {
  const recipe = await getRecipeById(params.recipeId);

  return {
    recipe: JSON.parse(JSON.stringify(recipe)) as TRecipe,
  };
}

export const actions = {
  default: async (event) => {
    // deleteRecipe(event.params.recipeId);
    console.log('something happening')
    return { url: '/recipes' };
  },
};
