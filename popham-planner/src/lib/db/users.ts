import type { MealFormType, MealType } from '$lib/UIdata/types';
import mongoose from './db';

let mealSchema: undefined | mongoose.Schema<MealType>;

if (!mongoose.models.meal && !mealSchema) {
  mealSchema = new mongoose.Schema<MealType>(
    {
      name: { type: String, required: true, default: '' },
      description: String,
      source: String,
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