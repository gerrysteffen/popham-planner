<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import type { CalendarType, MealPlanType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import Calendar from '$lib/components/calendar/Calendar.svelte';

  import {
    addCalendarWeeks,
    calculateWeekAndDay,
    createInitialCalendar,
    msSinceMidnight,
  } from '$lib/helperFunctions/calendarDatesCreation';

  export let data: { mealPlans: MealPlanType[] };

  let stopped = false;

  const today = Date.now() - msSinceMidnight(Date.now());
  let pastWeeks: number;
  let futureWeeks: number;
  let calendar: CalendarType;

  $: pw = Number($page.url.searchParams.get('pw'));
  $: fw = Number($page.url.searchParams.get('fw'));
  let initialCreationDone: boolean = false;

  $: if (!initialCreationDone && !!pw && !!fw) {
    pastWeeks = pw;
    futureWeeks = fw;
    calendar = createInitialCalendar(today, pastWeeks, futureWeeks);
    initialCreationDone = true;
  }

  let assigned: string[] = [];
  function assignMealPlans(plans: MealPlanType[], stopped: boolean) {
    if (!stopped) {
      plans.forEach((el) => {
        if (!assigned.includes(el._id)) {
          const { week, day } = calculateWeekAndDay(today, el.timestamp);
          const meal = el.mealType === 'Dinner' ? 'dinner' : 'lunch';
          if (calendar[`week${week}`]) {
            calendar[`week${week}`][day][meal] = [
              ...calendar[`week${week}`][day][meal],
              el,
            ];
            assigned.push(el._id);
          }
        }
      });
    }
  }
  $: assignMealPlans(data.mealPlans, stopped);

  async function getAddData(future: boolean) {
    future ? futureWeeks++ : pastWeeks--;
    goto(
      `?pw=${pastWeeks}&fw=${futureWeeks}${
        future ? '' : `#week${pastWeeks + 1}`
      }`
    );
    if (future) {
      calendar[`week${futureWeeks}`] = addCalendarWeeks(today, futureWeeks);
    } else {
      stopped = true;
      calendar[`week${pastWeeks}`] = calendar[`week${pastWeeks + 1}`];
      setTimeout(() => {
        calendar[`week${pastWeeks}`] = addCalendarWeeks(today, pastWeeks);
        stopped = false;
      }, 500);
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
    // TODO: add tag for future weeks
  }
</script>

<TitleBar title="Calendar" />
{#if calendar}
  <ContentWrapper padding={'0px'}>
    <div
      id="calendar-wrapper"
      on:scroll={monitorPosition}
      style="overflow: {stopped ? 'hidden' : 'scroll'};"
    >
      <Calendar {calendar} />
    </div>
  </ContentWrapper>
{/if}

<style>
  #calendar-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  #calendar-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
</style>
