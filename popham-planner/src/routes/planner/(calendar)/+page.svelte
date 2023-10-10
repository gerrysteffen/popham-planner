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
  } from '$lib/helperFunctions/calendarDatesCreation';
  import Spinner from '$lib/components/basicUI/Spinner.svelte';

  export let data: { mealPlans: MealPlanType[] };

  let stopped = false;

  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1,
    1
  ).getTime();
  // TODO: propper approach to time zones
  let pastWeeks: number;
  let futureWeeks: number;
  let calendar: CalendarType;

  $: pw = Number($page.url.searchParams.get('pw'));
  $: fw = Number($page.url.searchParams.get('fw'));
  let initialCreationDone: boolean = false;

  $: if (!initialCreationDone && (!!pw || pw === 0) && (!!fw || fw === 0)) {
    pastWeeks = pw;
    futureWeeks = fw;
    calendar = createInitialCalendar(monday, pastWeeks, futureWeeks);
    initialCreationDone = true;
  }

  let assigned: string[] = [];
  function assignMealPlans(plans: MealPlanType[], stopped: boolean) {
    if (!stopped) {
      plans.forEach((el) => {
        if (!assigned.includes(el._id)) {
          const { week, day } = calculateWeekAndDay(monday, el.timestamp);
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
    future ? futureWeeks+=2 : pastWeeks-=2;
    goto(
      `?pw=${pastWeeks}&fw=${futureWeeks}#week${
        future ? futureWeeks-2 : pastWeeks+2}`
    );
    if (future) {
      calendar[`week${futureWeeks-1}`] = addCalendarWeeks(monday, futureWeeks-1);
      calendar[`week${futureWeeks}`] = addCalendarWeeks(monday, futureWeeks);
    } else {
      // stopped = true;
      // calendar[`week${pastWeeks}`] = calendar[`week${pastWeeks + 1}`];
      // setTimeout(() => {
      //   calendar[`week${pastWeeks}`] = addCalendarWeeks(monday, pastWeeks);
      //   stopped = false;
      // }, 500);
      // stopped = true;
      calendar[`week${pastWeeks+1}`] = addCalendarWeeks(monday, pastWeeks+1);
      calendar[`week${pastWeeks}`] = addCalendarWeeks(monday, pastWeeks);
      // setTimeout(() => {
      //   calendar[`week${pastWeeks}`] = addCalendarWeeks(monday, pastWeeks);
      //   stopped = false;
      // }, 500);
    }
  }

  function monitorPosition(event: Event) {
    let scrolledHeight = (event.target as HTMLElement).scrollTop;
    let screenHeight = (event.target as HTMLElement).clientHeight;
    let totalHeight = (event.target as HTMLElement).scrollHeight;
    if (scrolledHeight === 0) {
      getAddData(false);
    } else if (scrolledHeight + screenHeight === totalHeight) {
      getAddData(true);
    }
    // TODO: add tag for future weeks
  }
</script>

<TitleBar title="Calendar" />
{#if calendar}
  <ContentWrapper padding={'0px'} overflow="none">
    <div id="calendar-wrapper" on:scroll={monitorPosition}>
      <!-- style="overflow: {stopped ? 'hidden' : 'scroll'};" -->
      <Calendar {calendar} />
    </div>
  </ContentWrapper>
{/if}
{#if stopped}
  <Spinner />
{/if}

<style>
  #calendar-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  #calendar-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
</style>
