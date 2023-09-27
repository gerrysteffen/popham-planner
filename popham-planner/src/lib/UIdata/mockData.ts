import type { MealType, RestaurantFormType, Titles } from './types';

export const restaurantMock: {
  emptyValues: RestaurantFormType;
  titles: Titles;
} = {
  emptyValues: {
    name: '',
    description: '',
    image_url: '',
    mainCategory: '',
    categories: [],
    tags: [],
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
  emptyValues: MealType;
  titles: Titles;
} = {
  emptyValues: {
    _id: '',
    name: '',
    description: '',
    source: '',
    image_url: '',
    mainCategory: '',
    categories: [],
    tags: [],
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
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
