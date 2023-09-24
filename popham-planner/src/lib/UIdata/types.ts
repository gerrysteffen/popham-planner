export type MealType = {
  _id: string;
  name: string;
  description: string;
  source: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type MealFormType = Omit<MealType, '_id' | 'createdAt' | 'updatedAt'>;

export interface RestaurantType {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type RestaurantFormType = Omit<
  RestaurantType,
  '_id' | 'createdAt' | 'updatedAt'
>;

export type Titles = {
  [key: string]: string;
};
