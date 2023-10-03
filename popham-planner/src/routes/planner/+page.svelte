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

  export let data: { mealPlans: MealPlanType[] };

  const today = Date.now() - msSinceMidnight(Date.now());
  let pastWeeks = -1;
  let futureWeeks = 1;

  let calendar: CalendarType = createInitialCalendar(
    today,
    pastWeeks,
    futureWeeks
  );

  let assigned: string[] = [];
  function assignMealPlans(plans: MealPlanType[]) {
    plans.forEach((el) => {
      if (el && !assigned.includes(el._id)) {
        const { week, day } = calculateWeekAndDay(today, el.timestamp);
        const meal = el.meal === 'Dinner' ? 'dinner' : 'lunch';
        if (calendar[`week${week}`][day]) {
          calendar[`week${week}`][day][meal] = [
            ...calendar[`week${week}`][day][meal],
            el,
          ];
          assigned.push(el._id);
        }
      }
    });
  }
  $: assignMealPlans(data.mealPlans);

  async function getAddData(future: boolean) {
    future ? futureWeeks++ : pastWeeks--;
    goto(
      `?pw=${pastWeeks}&fw=${futureWeeks}${
        future ? '' : `#week${pastWeeks + 1}`
      }`
    );
    calendar[`week${future ? futureWeeks : pastWeeks}`] = addCalendarWeeks(
      today,
      future ? futureWeeks : pastWeeks
    );
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
