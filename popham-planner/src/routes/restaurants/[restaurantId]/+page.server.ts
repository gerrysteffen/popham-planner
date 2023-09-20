import type { Restaurant } from '$lib/types/types';
import exampleData from '../../../lib/exampleData';

export function load({ params }) {
  const restaurant = exampleData.restaurants.find(
    (restaurant: Restaurant) => restaurant.id === params.restaurantId
  ) || {name: 'No restaurant found', id: params.restaurantId};

  return {
    restaurant,
  };
}
