import type { MealFormType, RestaurantFormType, Titles } from './types';

export const restaurantMock: {
  emptyValues: RestaurantFormType;
  titles: Titles;
} = {
  emptyValues: {
    name: '',
    description: '',
    image_url: '',
    tags: [],
    mainCategory: '',
    categories: [],
  },
  titles: {
    name: 'Name',
    description: 'Description',
    image_url: 'Image Link (optional)',
    tags: 'Tags',
    mainCategory: 'Main Category',
    categories: 'Categories',
  },
};

export const mealMock: {
  emptyValues: MealFormType;
  titles: Titles;
} = {
  emptyValues: {
    name: '',
    description: '',
    source: '',
    image_url: '',
    tags: [],
    mainCategory: '',
    categories: [],
  },
  titles: {
    name: 'Name',
    description: 'Description',
    source: 'Source',
    image_url: 'Image Link (optional)',
    tags: 'Tags',
    mainCategory: 'Main Category',
    categories: 'Categories',
  },
};
