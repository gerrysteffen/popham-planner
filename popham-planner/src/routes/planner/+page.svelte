<script lang="ts">
  import { goto } from '$app/navigation';
  import type { CalendarType, MealPlanType } from '$lib/UIdata/types';
  import Calendar from '$lib/components/calendar/Calendar.svelte';
  import {
    addCalendarWeeks,
    calculateWeekAndDay,
    createInitialCalendar,
    msSinceMidnight,
  } from '$lib/helperFunctions/calendarDatesCreation';

  const today = Date.now() - msSinceMidnight(Date.now());

  let pastWeeks = -1;
  let futureWeeks = 1;

  let calendar: CalendarType = createInitialCalendar(
    today,
    pastWeeks,
    futureWeeks
  );

  const examplePlans: MealPlanType[] = [
    {
      timestamp: 1696320996030,
      meal: 'Dinner',
      plan: JSON.parse(
        '{"_id":"650ee1bffebfa2b584adb3e0","name":"Älplermakronen","description":"A wonderful meal, crafted in the valleys of Switzerland.","image_url":"https://www.bettybossi.ch/rdbimg/bb_bbza140106_0005a/bb_bbza140106_0005a_r01_v005_x0010.jpg","tags":["GOAT"],"mainCategory":"Pasta","categories":["Pasta","Swiss","Cheese"],"createdAt":"2023-09-23T13:01:51.433Z","updatedAt":"2023-09-26T16:16:56.604Z","__v":0,"source":""}'
      ),
    },
  ];

  examplePlans.forEach((el) => {
    const { week, day } = calculateWeekAndDay(today, el.timestamp);
    el.meal === 'Dinner'
      ? calendar[`week${week}`][day].dinner.push(el)
      : calendar[`week${week}`][day].lunch.push(el);
  });

  function getAddData(future: boolean) {
    if (future) {
      futureWeeks++;
      calendar[`week${futureWeeks}`] = addCalendarWeeks(today, futureWeeks);
    } else {
      goto(`#week${pastWeeks}`);
      pastWeeks--;
      calendar[`week${pastWeeks}`] = addCalendarWeeks(today, pastWeeks);
    }
  }

  function monitorPosition(event: Event) {
    let scrolledHeight = (event.target as HTMLElement).scrollTop;
    let screenHeight = (event.target as HTMLElement).clientHeight;
    let totalHeight = (event.target as HTMLElement).scrollHeight;
    if (scrolledHeight === 0) {
      getAddData(false);
    } else if (scrolledHeight + screenHeight > totalHeight - 100) {
      getAddData(true);
    }
  }
</script>

<div id="calendar-wrapper" on:scroll={monitorPosition}>
  <Calendar {calendar} />
</div>

<svelte:window />

<style>
  /* if outer content wrapper removed, this needs to be adjusted */
  #calendar-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: scroll;
  }
</style>
