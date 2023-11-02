import type { CategoryFormType, CategoryType } from '$lib/utils/types';
import mongoose from './db';

let categorySchema: undefined | mongoose.Schema<CategoryType>;

if (!mongoose.models.category && !categorySchema) {
  categorySchema = new mongoose.Schema<CategoryType>(
    {
      name: { type: String, required: true, default: '' }
    },
    {
      timestamps: true
    }
  );
}

export const CategoryModel =
  (mongoose.models.category as mongoose.Model<CategoryType>) ||
  mongoose.model<CategoryType>('category', categorySchema);

export async function getAllCategories() {
  try {
    const categories = await CategoryModel!.find({});
    return categories;
  } catch (error) {
    console.log('Error fetching:', error);
    return [];
  }
}

export async function getCategoryById(id: string) {
  try {
    const category = await CategoryModel!.findById(id);
    return category;
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function createCategory(category: CategoryFormType) {
  try {
    return await CategoryModel!.create(category);
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function updateCategory(id: string, category: CategoryFormType) {
  try {
    await CategoryModel!.findByIdAndUpdate(id, category);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}

export async function deleteCategory(id: string) {
  try {
    await CategoryModel!.findByIdAndDelete(id);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}
