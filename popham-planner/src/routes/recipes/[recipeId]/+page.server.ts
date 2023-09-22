import { getRecipeById, type TRecipe } from '$lib/db/recipes';

export async function load({ params }) {
  const recipe = await getRecipeById(params.recipeId);

  return {
    recipe: JSON.parse(JSON.stringify(recipe)) as TRecipe,
  };
}
