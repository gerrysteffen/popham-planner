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

export type MealFormType = Omit<MealType, '_id' | 'createdAt' | 'updatedAt'>;

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
