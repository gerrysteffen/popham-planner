export type TypeSkeleton = {
  _id: string;
  name: string;
  description: string;
  image_url: string;
  tags: string[];
  mainCategory: string;
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

export type RestaurantFormType = Omit<
  RestaurantType,
  '_id' | 'createdAt' | 'updatedAt'
>;

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
  name: string;
  meals: MealType[];
  restaurants: RestaurantType[];
  plans: MealPlanType[];
};

export type MealPlanType = {
  timestamp: number;
  meal: 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner';
  plan: MealType | RestaurantType;
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
