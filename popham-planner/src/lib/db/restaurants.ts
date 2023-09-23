import mongoose from './db';

export interface RestaurantType {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type RestaurantFormType = Omit<
  RestaurantType,
  '_id' | 'createdAt' | 'updatedAt'
>;

let restaurantSchema: undefined | mongoose.Schema<RestaurantType>;

if (!mongoose.models.restaurant && !restaurantSchema) {
  restaurantSchema = new mongoose.Schema<RestaurantType>(
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

const RestaurantModel =
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
