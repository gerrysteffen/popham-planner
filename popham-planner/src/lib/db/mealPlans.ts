// import type { MealFormType, MealPlanType, MealType } from '$lib/UIdata/types';
// import mongoose from './db';

// let mealPlanSchema: undefined | mongoose.Schema<MealPlanType>;

// if (!mongoose.models.meal && !mealPlanSchema) {
//   mealPlanSchema = new mongoose.Schema<MealPlanType>(
//     {
//       timestamp: Number,
//       meal: String,
//       plan:
//         { type: mongoose.Schema.Types.ObjectId, ref: 'meal' },
//         {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: 'restaurant',
//         },
//       ,
//     },
//     {
//       timestamps: true,
//     }
//   );
// }

// const MealModel =
//   (mongoose.models.meal as mongoose.Model<MealType>) ||
//   mongoose.model<MealType>('meal', mealPlanSchema);

// export async function getAllMeals() {
//   try {
//     const meals = await MealModel!.find({});
//     return meals;
//   } catch (error) {
//     console.log('Error fetching:', error);
//     return [];
//   }
// }

// export async function getMealById(id: string) {
//   try {
//     const meal = await MealModel!.findById(id);
//     return meal;
//   } catch (error) {
//     console.log('Error fetching:', error);
//     return null;
//   }
// }

// export async function createMeal(meal: MealFormType) {
//   try {
//     return await MealModel!.create(meal);
//   } catch (error) {
//     console.log('Error fetching:', error);
//     return null;
//   }
// }

// export async function updateMeal(id: string, meal: MealFormType) {
//   try {
//     await MealModel!.findByIdAndUpdate(id, meal);
//   } catch (error) {
//     console.log('Error fetching:', error);
//   }
// }

// export async function deleteMeal(id: string) {
//   try {
//     await MealModel!.findByIdAndDelete(id);
//   } catch (error) {
//     console.log('Error fetching:', error);
//   }
// }
