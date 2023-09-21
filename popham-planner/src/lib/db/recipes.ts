import mongoose from './db';

export interface IRecipe {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

let recipeSchema: undefined | mongoose.Schema<IRecipe>;

if (!mongoose.models.recipe && !recipeSchema) {
  recipeSchema = new mongoose.Schema<IRecipe>(
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
  (mongoose.models.recipe as mongoose.Model<IRecipe>) ||
  mongoose.model<IRecipe>('recipe', recipeSchema);

export async function getAllRecipes() {
  const recipes = await RecipeModel!.find({});
  return recipes;
}

export async function getRecipeById(id: string) {
  const recipe = await RecipeModel!.findById(id);
  return recipe;
}
