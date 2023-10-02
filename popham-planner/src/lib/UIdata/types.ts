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
  calendar: MealDateType[];
};

export type CalendarType = {
  [key: string]: MealDateType[];
};

export type MealDateType = {
  date: Date;
  year: number;
  month: number;
  day: number;
  meal: 'Breakfast' | 'Brunch' | 'Lunch' | 'Dinner';
  lunch: [MealType | RestaurantType] | [];
  dinner: [MealType | RestaurantType] | [];
};

export type UserType = {
  name: string;
  households: HouseholdType[];
};
