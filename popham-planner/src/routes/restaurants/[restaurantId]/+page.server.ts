import { getRestaurantById, type IRestaurant } from '$lib/db/restaurants';

export async function load({ params }) {
  const restaurant = await getRestaurantById(params.restaurantId);

  return {
    restaurant: JSON.parse(JSON.stringify(restaurant)) as IRestaurant,
  };
}
