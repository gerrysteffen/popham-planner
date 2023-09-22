import mongoose from './db';

export type TRecipe = {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type TRecipeForm = Omit<TRecipe, '_id' | 'createdAt' | 'updatedAt'>;

let recipeSchema: undefined | mongoose.Schema<TRecipe>;

if (!mongoose.models.recipe && !recipeSchema) {
  recipeSchema = new mongoose.Schema<TRecipe>(
    {
      name: String,
      description: String,
      image_url: String,
      tags: [String],
      mainCategory: String,
      categories: [String],
    },
    {
      timestamps: true,
    }
  );
}

const RecipeModel =
  (mongoose.models.recipe as mongoose.Model<TRecipe>) ||
  mongoose.model<TRecipe>('recipe', recipeSchema);

export async function getAllRecipes() {
  const recipes = await RecipeModel!.find({});
  return recipes;
}

export async function getRecipeById(id: string) {
  const recipe = await RecipeModel!.findById(id);
  return recipe;
}

export async function createRecipe(recipe: TRecipeForm) {
  await RecipeModel!.create(recipe);
}

export async function deleteRecipe(id: string) {
  await RecipeModel!.findByIdAndDelete(id);
}
