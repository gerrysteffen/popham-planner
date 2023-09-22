import { getAllRecipes, type TRecipe } from '$lib/db/recipes.js';

export async function load() {
  const recipes = await getAllRecipes();

  return {
    recipes: JSON.parse(JSON.stringify(recipes)) as TRecipe[],
  };
}
