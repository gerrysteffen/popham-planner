import { preloadData } from '$app/navigation';
import type {
  MealType,
  OverviewCriteria,
  RestaurantType,
} from '$lib/UIdata/types';
import { adjustForUmlaute } from './umlaute';

export function sortElements(
  data: MealType[] | RestaurantType[],
  column: OverviewCriteria,
  ascending: boolean
) {
  if (
    column === 'categories' ||
    column === 'mainCategory' ||
    column === 'tags'
  ) {
    column = 'name';
  }
  let sortLogic = (
    a: MealType | RestaurantType,
    b: MealType | RestaurantType
  ) => {
    const A = adjustForUmlaute(a[column] as string);
    const B = adjustForUmlaute(b[column] as string);
    return A < B ? (ascending ? -1 : 1) : A > B ? (ascending ? 1 : -1) : 0;
  };
  return data.sort(sortLogic);
}

export function sortGroupArr(
  data: [string, [MealType | RestaurantType]][],
  ascending: boolean
) {
  let sortLogic = (
    a: [string, [MealType | RestaurantType]],
    b: [string, [MealType | RestaurantType]]
  ) => {
    const A = a[0];
    const B = b[0];
    return A < B ? (ascending ? -1 : 1) : A > B ? (ascending ? 1 : -1) : 0;
  };
  return data.sort(sortLogic);
}
