import { deleteRestaurant, getRestaurantById, type RestaurantType } from '$lib/db/restaurants';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const restaurant = await getRestaurantById(params.restaurantId);

  if (!restaurant) {
    throw redirect(301, '/restaurants');
  }

  return {
    restaurant: JSON.parse(JSON.stringify(restaurant)) as RestaurantType,
  };
}

export const actions = {
  default: async ({ params }) => {
    deleteRestaurant(params.restaurantId);
    throw redirect(301, '/restaurants');
  },
};
