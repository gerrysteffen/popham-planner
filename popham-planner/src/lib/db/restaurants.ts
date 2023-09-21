import mongoose from './db';

export interface IRestaurant {
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

let restaurantSchema: undefined | mongoose.Schema<IRestaurant>;

if (!mongoose.models.restaurant && !restaurantSchema) {
  restaurantSchema = new mongoose.Schema<IRestaurant>(
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
  (mongoose.models.restaurant as mongoose.Model<IRestaurant>) ||
  mongoose.model<IRestaurant>('restaurant', restaurantSchema);

export async function getAllRestaurants() {
  const restaurants = await RestaurantModel!.find({});
  return restaurants;
}

export async function getRestaurantById(id: string) {
  const restaurant = await RestaurantModel!.findById(id);
  return restaurant;
}
