import type { MealPlanFormType, RestaurantType } from '$lib/UIdata/types.js';
import { createMealPlan } from '$lib/db/mealPlans.js';
import { deleteRestaurant, getRestaurantById } from '$lib/db/restaurants';
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
  delete: async ({ params }) => {
    deleteRestaurant(params.restaurantId);
    throw redirect(301, '/restaurants');
  },
  addMealPlan: async ({ url, request }) => {
    const data = await request.formData();
    const restaurant = data.get('id') as string;
    const date = data.get('date') as string;
    const mealType = data.get('mealType') as 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner';
    const planType = data.get('planType') as 'meal' | 'restaurant';

    const timestamp = new Date(date).getTime();

    const mealPlan: MealPlanFormType = {
      timestamp,
      planType,
      mealType,
      restaurant
    };

    await createMealPlan(mealPlan);
    throw redirect(301, url.pathname);
  }
};
