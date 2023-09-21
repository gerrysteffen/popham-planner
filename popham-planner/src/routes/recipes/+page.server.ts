import { getAllRecipes, type IRecipe } from '$lib/db/recipes.js';

export async function load({ params }) {
  const recipes = await getAllRecipes();

  return {
    recipes: JSON.parse(JSON.stringify(recipes)) as IRecipe[],
  };
}
