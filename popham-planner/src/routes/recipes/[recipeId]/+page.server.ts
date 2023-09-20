import type { Recipe } from '$lib/types/types';
import exampleData from '../../../lib/exampleData';

export function load({ params }) {
  const recipe = exampleData.recipes.find(
    (recipe: Recipe) => recipe.id === params.recipeId
  ) || { name: 'No recipe found', id: params.recipeId };

  return {
    recipe,
  };
}
