import type { RestaurantFormType } from '$lib/utils/types.js';
import { createRestaurant } from '$lib/db/restaurants.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
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
    const newRestaurant = await createRestaurant(restaurant);
    throw redirect(301, `/restaurants/${newRestaurant?._id || ''}`);
  }
};
