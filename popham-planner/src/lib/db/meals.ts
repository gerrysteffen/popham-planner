import mongoose from './db';

export type MealType = {
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

export type MealTypeForm = Omit<MealType, '_id' | 'createdAt' | 'updatedAt'>;

let mealSchema: undefined | mongoose.Schema<MealType>;

if (!mongoose.models.meal && !mealSchema) {
  mealSchema = new mongoose.Schema<MealType>(
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

const MealModel =
  (mongoose.models.meal as mongoose.Model<MealType>) ||
  mongoose.model<MealType>('meal', mealSchema);

export async function getAllMeals() {
  const meals = await MealModel!.find({});
  return meals;
}

export async function getMealById(id: string) {
  const meal = await MealModel!.findById(id);
  return meal;
}

export async function createMeal(meal: MealTypeForm) {
  return await MealModel!.create(meal);
}

export async function updateMeal(id: string, meal: MealTypeForm) {
  await MealModel!.findByIdAndUpdate(id, meal);
}

export async function deleteMeal(id: string) {
  await MealModel!.findByIdAndDelete(id);
}
