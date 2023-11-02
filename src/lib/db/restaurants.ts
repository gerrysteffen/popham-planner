import type { RestaurantFormType, RestaurantType } from '$lib/utils/types';
import mongoose from './db';

let restaurantSchema: undefined | mongoose.Schema<RestaurantType>;

if (!mongoose.models.restaurant && !restaurantSchema) {
  restaurantSchema = new mongoose.Schema<RestaurantType>(
    {
      name: { type: String, required: true, default: '' },
      description: String,
      image_url: String,
      tags: [String],
      mainCategory: String,
      categories: [String]
      // mainCategory: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'category'
      // },
      // categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }]
    },
    {
      timestamps: true
    }
  );
}

export const RestaurantModel =
  (mongoose.models.restaurant as mongoose.Model<RestaurantType>) ||
  mongoose.model<RestaurantType>('restaurant', restaurantSchema);

export async function getAllRestaurants() {
  try {
    const restaurants = await RestaurantModel!.find({});
    return restaurants;
  } catch (error) {
    console.log('Error fetching:', error);
    return [];
  }
}

export async function getRestaurantById(id: string) {
  try {
    const restaurant = await RestaurantModel!.findById(id);
    return restaurant;
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function createRestaurant(restaurant: RestaurantFormType) {
  try {
    return await RestaurantModel!.create(restaurant);
  } catch (error) {
    console.log('Error fetching:', error);
    return null;
  }
}

export async function updateRestaurant(id: string, restaurant: RestaurantFormType) {
  try {
    await RestaurantModel!.findByIdAndUpdate(id, restaurant);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}

export async function deleteRestaurant(id: string) {
  try {
    await RestaurantModel!.findByIdAndDelete(id);
  } catch (error) {
    console.log('Error fetching:', error);
  }
}
