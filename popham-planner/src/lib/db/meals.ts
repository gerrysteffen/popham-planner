import type { MealFormType, MealType } from '$lib/UIdata/types';
import mongoose from './db';

let mealSchema: undefined | mongoose.Schema<MealType>;

if (!mongoose.models.meal && !mealSchema) {
  mealSchema = new mongoose.Schema<MealType>(
    {
      name: { type: String, required: true, default: '' },
      description: { type: String, required: true, default: '' },
      source: { type: String, required: true, default: '' },
      image_url: { type: String, required: true, default: '' },
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
  try {
    const meals = await MealModel!.find({});
    return meals;
  } catch (error) {
    console.log('Error fetching:', error);
    return [];
  }
}

export async function getMealById(id: string) {
  try {
    const meal = await MealModel!.findById(id);
    return meal;
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function createMeal(meal: MealFormType) {
  try {
    return await MealModel!.create(meal);
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function updateMeal(id: string, meal: MealFormType) {
  try {
    await MealModel!.findByIdAndUpdate(id, meal);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}

export async function deleteMeal(id: string) {
  try {
    await MealModel!.findByIdAndDelete(id);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}
