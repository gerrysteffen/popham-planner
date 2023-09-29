import type {
  MealType,
  OverviewCriteria,
  RestaurantType,
} from '$lib/UIdata/types';
import { sortGroupArr } from './sorting';
import { adjustForUmlaute } from './umlaute';

export function groupElements(
  data: MealType[] | RestaurantType[],
  column: OverviewCriteria,
  ascending: boolean
) {
  let newGroups: {
    [key: string]: [MealType | RestaurantType] | null;
  } = {
    Uncategorised: null,
  };

  if (column === 'name') {
    data.forEach((el: MealType | RestaurantType) => {
      let firstLetter = adjustForUmlaute(el[column].slice(0, 1).toUpperCase());
      if (newGroups[firstLetter]) {
        newGroups[firstLetter]!.push(el);
      } else {
        newGroups[firstLetter] = [el];
      }
    });
  } else if (column === 'mainCategory') {
    data.forEach((el: MealType | RestaurantType) => {
      if (!el[column]) el[column] = 'Uncategorised';
      if (newGroups[el[column]]) {
        newGroups[el[column]]!.push(el);
      } else {
        newGroups[el[column]] = [el];
      }
    });
  } else if (column === 'categories' || column === 'tags') {
    data.forEach((el: MealType | RestaurantType) => {
      if (!el[column].length) {
        if (newGroups['Uncategorised']) {
          newGroups['Uncategorised'].push(el);
        } else {
          newGroups['Uncategorised'] = [el];
        }
      } else {
        el[column].forEach((cat) => {
          if (newGroups[cat]) {
            newGroups[cat]!.push(el);
          } else {
            newGroups[cat] = [el];
          }
        });
      }
    });
  }

  if (newGroups['Uncategorised'] === null) {
    delete newGroups['Uncategorised'];
  }

  let newGroupArr = Object.entries(
    newGroups as {
      [key: string]: [MealType | RestaurantType];
    }
  );

  if (
    column === 'categories' ||
    column === 'mainCategory' ||
    column === 'tags'
  ) {
    newGroupArr = sortGroupArr(newGroupArr, ascending);
  }

  return newGroupArr;
}
