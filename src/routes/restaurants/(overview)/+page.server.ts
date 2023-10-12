import type { RestaurantType } from '$lib/UIdata/types.js';
import { getAllRestaurants } from '$lib/db/restaurants';

export async function load() {
  const restaurants = await getAllRestaurants();

  return {
    restaurants: JSON.parse(JSON.stringify(restaurants)) as RestaurantType[]
  };
}
