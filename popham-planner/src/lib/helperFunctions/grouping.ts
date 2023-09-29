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
  } else if (column === 'updatedAt' || column === 'createdAt') {
    const hour = 1000 * 60 * 60;
    const day = hour * 24;
    const week = 7 * day;
    const month = 30 * day;
    data.forEach((el: MealType | RestaurantType) => {
      const timeSince = Date.now() - new Date(el[column]).getTime();
      if (timeSince < hour) {
        newGroups['Last Hour']
          ? newGroups['Last Hour'].push(el)
          : (newGroups['Last Hour'] = [el]);
      } else if (timeSince < day) {
        newGroups['Today']
          ? newGroups['Today'].push(el)
          : (newGroups['Today'] = [el]);
      } else if (timeSince < 2 * day) {
        newGroups['Yesterday']
          ? newGroups['Yesterday'].push(el)
          : (newGroups['Yesterday'] = [el]);
      } else if (timeSince < week) {
        newGroups['Last Week']
          ? newGroups['Last Week'].push(el)
          : (newGroups['Last Week'] = [el]);
      } else if (timeSince < month) {
        newGroups['Last Month']
          ? newGroups['Last Month'].push(el)
          : (newGroups['Last Month'] = [el]);
      } else {
        newGroups['Older']
          ? newGroups['Older'].push(el)
          : (newGroups['Older'] = [el]);
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
