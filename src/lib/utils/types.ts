export type TypeSkeleton = {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  // mainCategory?: CategoryType;
  // categories: CategoryType[];
  mainCategory?: string;
  categories: string[];
  // priceLevel: number; // TODO
  // rating: number; // TODO
  createdAt: string;
  updatedAt: string;
};

export type MealType = TypeSkeleton & {
  source: string;
  // sourceType // TODO
};

export type MealFormType = Omit<MealType, '_id' | 'createdAt' | 'updatedAt'>;

export type RestaurantType = TypeSkeleton & {
  address?: string; // TODO
};

export type RestaurantFormType = Omit<RestaurantType, '_id' | 'createdAt' | 'updatedAt'>;

export type Titles = {
  [key: string]: string;
};

export type OverviewCriteria =
  | 'name'
  | 'tags'
  | 'categories'
  | 'mainCategory'
  | 'createdAt'
  | 'updatedAt';

export type HouseholdType = {
  _id: string;
  name: string;
  meals: MealType[];
  restaurants: RestaurantType[];
  plans: MealPlanType[];
};

export type MealPlanType = {
  _id: string;
  timestamp: number;
  mealType: 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner';
  planType: 'restaurant' | 'meal';
  restaurant?: RestaurantType;
  meal?: MealType;
  createdAt: string;
  updatedAt: string;
};

export type MealPlanFormType = Omit<
  MealPlanType,
  '_id' | 'createdAt' | 'updatedAt' | 'meal' | 'restaurant'
> & {
  restaurant?: string;
  meal?: string;
};

export type CalendarType = {
  [key: string]: MealDateType[];
};

export type MealDateType = {
  timestamp: number;
  lunch: MealPlanType[];
  dinner: MealPlanType[];
};

export type UserType = {
  name: string;
  households: HouseholdType[];
};

export type CategoryType = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryFormType = Omit<CategoryType, '_id' | 'createdAt' | 'updatedAt'>;
