import type {
  MealType,
  OverviewCriteria,
  RestaurantType,
} from '$lib/UIdata/types';
import { adjustForUmlaute } from './umlaute';

export function sortElements(
  data: MealType[] | RestaurantType[],
  column: OverviewCriteria, // TODO: all attributes
  ascending: boolean
) {
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
