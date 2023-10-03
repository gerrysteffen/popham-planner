import type { MealPlanType } from '$lib/UIdata/types';

export async function load({ url }) {
  let pastWeeks: number = Number(url.searchParams.get('pw')) || 1;
  let futureWeeks: number = Number(url.searchParams.get('fw')) || 1;

  const today = new Date().setHours(0, 0, 0, 0) + 1000 * 60 * 60; // 1h correction to make sure Summer time doesn't affect
  const timeMin = today - pastWeeks * 7 * 24 * 60 * 60 * 1000;
  const timeMax = today + (1 + futureWeeks) * 7 * 24 * 60 * 60 * 1000;

  let examplePlans: MealPlanType[] = [];

  if (futureWeeks > 0) {
    examplePlans = [
      ...examplePlans,
      {
        _id: '123',
        timestamp: 1696320996030,
        meal: 'Dinner',
        plan: JSON.parse(
          '{"_id":"650ee1bffebfa2b584adb3e0","name":"Älplermakronen","description":"A wonderful meal, crafted in the valleys of Switzerland.","image_url":"https://www.bettybossi.ch/rdbimg/bb_bbza140106_0005a/bb_bbza140106_0005a_r01_v005_x0010.jpg","tags":["GOAT"],"mainCategory":"Pasta","categories":["Pasta","Swiss","Cheese"],"createdAt":"2023-09-23T13:01:51.433Z","updatedAt":"2023-09-26T16:16:56.604Z","__v":0,"source":""}'
        ),
      },
    ];
  }

  // if (futureWeeks > 2) {
  //   console.log(examplePlans);
  //   examplePlans = [
  //     ...examplePlans,
  //     {
  //       _id: '234',
  //       timestamp: 1698192000000,
  //       meal: 'Dinner',
  //       plan: JSON.parse(
  //         '{"_id":"650ee1bffebfa2b584adb3e0","name":"Älplermakronen","description":"A wonderful meal, crafted in the valleys of Switzerland.","image_url":"https://www.bettybossi.ch/rdbimg/bb_bbza140106_0005a/bb_bbza140106_0005a_r01_v005_x0010.jpg","tags":["GOAT"],"mainCategory":"Pasta","categories":["Pasta","Swiss","Cheese"],"createdAt":"2023-09-23T13:01:51.433Z","updatedAt":"2023-09-26T16:16:56.604Z","__v":0,"source":""}'
  //       ),
  //     },
  //   ];
  // }

  return {
    mealPlans: examplePlans,
  };
}
