import type { MealType } from '$lib/utils/types';
import mongoose from './db';

let householdSchema: undefined | mongoose.Schema<MealType>;

if (!mongoose.models.household && !householdSchema) {
  householdSchema = new mongoose.Schema<MealType>(
    {
      name: { type: String, required: true, default: '' }
    },
    {
      timestamps: true
    }
  );
}
