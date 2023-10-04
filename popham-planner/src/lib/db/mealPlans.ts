import type { MealPlanFormType, MealPlanType } from '$lib/UIdata/types';
import mongoose from './db';

let mealPlanSchema: undefined | mongoose.Schema<MealPlanType>;

if (!mongoose.models.mealPlan && !mealPlanSchema) {
  mealPlanSchema = new mongoose.Schema<MealPlanType>(
    {
      timestamp: Number,
      mealType: String,
      planType: String,
      meal: { type: mongoose.Schema.Types.ObjectId, ref: 'meal' },
      restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
      },
    },
    {
      timestamps: true,
    }
  );
}

const MealPlanModel =
  (mongoose.models.mealPlan as mongoose.Model<MealPlanType>) ||
  mongoose.model<MealPlanType>('mealPlan', mealPlanSchema);

export async function getAllMealPlans() {
  try {
    const mealPlans = await MealPlanModel!
      .find({})
      .populate(['meal', 'restaurant']);
    return mealPlans;
  } catch (error) {
    console.log('Error fetching:', error);
    return [];
  }
}

export async function getMealPlanById(id: string) {
  try {
    const mealPlan = await MealPlanModel!.findById(id).populate(['meal', 'restaurant']);
    return mealPlan;
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function createMealPlan(mealPlan: MealPlanFormType) {
  try {
    return await MealPlanModel!.create(mealPlan);
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function updateMealPlan(id: string, mealPlan: MealPlanFormType) {
  try {
    await MealPlanModel!.findByIdAndUpdate(id, mealPlan);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}

export async function deleteMealPlan(id: string) {
  try {
    await MealPlanModel!.findByIdAndDelete(id);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}
