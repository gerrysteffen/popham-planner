import type { RestaurantFormType, RestaurantType } from '$lib/utils/types.js';
import { getRestaurantById, updateRestaurant } from '$lib/db/restaurants.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const restaurant = await getRestaurantById(params.restaurantId);

  if (!restaurant) {
    throw redirect(301, '/restaurants');
  }

  return {
    restaurant: JSON.parse(JSON.stringify(restaurant)) as RestaurantType
  };
}

export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const image_url = data.get('image_url') as string;
    const mainCategory = data.get('mainCategory') as string;
    const categories = data.getAll('categories') as string[];
    const tags = data.getAll('tags') as string[];

    const restaurant: RestaurantFormType = {
      name,
      description,
      image_url,
      mainCategory,
      categories,
      tags
    };
    await updateRestaurant(params.restaurantId, restaurant);
    throw redirect(301, `/restaurants/${params.restaurantId}`);
  }
};
