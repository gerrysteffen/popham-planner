import type { MealPlanFormType, MealPlanType } from '$lib/UIdata/types';
import mongoose from './db';
import { MealModel } from './meals';
import { RestaurantModel } from './restaurants';

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
        ref: 'restaurant'
      }
    },
    {
      timestamps: true
    }
  );
}

const MealPlanModel =
  (mongoose.models.mealPlan as mongoose.Model<MealPlanType>) ||
  mongoose.model<MealPlanType>('mealPlan', mealPlanSchema);

export async function getAllMealPlans() {
  try {
    const mealPlans = await MealPlanModel!.find({}).populate(['meal', 'restaurant']);
    return mealPlans;
  } catch (error) {
    console.log('Error fetching:', error);
    return [];
  }
}

export async function getMealPlansByDate(start: number, end: number) {
  try {
    const mealPlans = await MealPlanModel!
      .find({ timestamp: { $gte: start, $lte: end } })
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
    if (mealPlan.planType === 'meal') {
      if (!(await MealModel.exists({ _id: mealPlan.meal }))) {
        return;
      }
    } else if (mealPlan.planType === 'restaurant') {
      if (!(await RestaurantModel.exists({ _id: mealPlan.restaurant }))) {
        return;
      }
    }
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
