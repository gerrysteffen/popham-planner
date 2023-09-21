import { getAllRestaurants, type IRestaurant } from '$lib/db/restaurants';

export async function load({ params }) {
  const restaurants = await getAllRestaurants();

  return {
    restaurants: JSON.parse(JSON.stringify(restaurants)) as IRestaurant[],
  };
}
