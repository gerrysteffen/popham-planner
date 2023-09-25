type TypeSkeleton = {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
  categories: string[];
  // priceLevel: number; // TODO
  // rating: number; // TODO
  createdAt: Date;
  updatedAt: Date;
};

export type MealType = TypeSkeleton & {
  source: string;
  // sourceType // TODO
};

export type MealFormType = Omit<MealType, '_id' | 'createdAt' | 'updatedAt'>;

export type RestaurantType = TypeSkeleton & {
  // area: string; // TODO
};

export type RestaurantFormType = Omit<
  RestaurantType,
  '_id' | 'createdAt' | 'updatedAt'
>;

export type Titles = {
  [key: string]: string;
};
