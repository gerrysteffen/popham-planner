import type {
  MealType,
  OverviewCriteria,
  RestaurantType,
} from '$lib/UIdata/types';
import { adjustForUmlaute } from './umlaute';

export function groupElements(
  data: MealType[] | RestaurantType[],
  column: OverviewCriteria,
  ascending: boolean
) {
  let newGroups: any = {};
  if (column === 'name') {
    data.forEach((el) => {
      let firstLetter = adjustForUmlaute(el[column].slice(0, 1).toUpperCase());
      if (newGroups[firstLetter]) {
        newGroups[firstLetter].push(el);
      } else {
        newGroups[firstLetter] = [el];
      }
    });
  } else if (column === 'mainCategory') {
    data.forEach((el) => {
      if (newGroups[el[column]]) {
        newGroups[el[column]].push(el);
      } else {
        newGroups[el[column]] = [el];
      }
    });
  }
  return newGroups;
}
