import type { MealType, RestaurantType, Titles } from './types';

export const restaurantMock: {
  emptyValues: RestaurantType;
  titles: Titles;
} = {
  emptyValues: {
    _id: '',
    name: '',
    description: '',
    image_url: '',
    categories: [],
    tags: [],
    createdAt: String(new Date(Date.now())),
    updatedAt: String(new Date(Date.now()))
  },
  titles: {
    name: 'Name',
    description: 'Description',
    image_url: 'Image Link (optional)',
    tags: 'Tags',
    mainCategory: 'Main Category',
    categories: 'Categories'
  }
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
    categories: [],
    tags: [],
    createdAt: String(new Date(Date.now())),
    updatedAt: String(new Date(Date.now()))
  },
  titles: {
    name: 'Name',
    description: 'Description',
    source: 'Source',
    image_url: 'Image Link (optional)',
    tags: 'Tags',
    mainCategory: 'Main Category',
    categories: 'Categories'
  }
};
