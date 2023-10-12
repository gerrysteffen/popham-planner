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
  import { CalendarSettings } from '$lib/store/store';

  export let data: { mealPlans: MealPlanType[] };

  $: setting = $CalendarSettings.view;

  const now = new Date();
  $: dayOne =
    setting === 'week'
      ? new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - now.getDay() + 1,
          1
        ).getTime()
      : now.setHours(1, 0, 0, 0);
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
    calendar = createInitialCalendar(dayOne, pastWeeks, futureWeeks);
    initialCreationDone = true;
  }

  let assigned: string[] = [];
  function assignMealPlans(
    plans: MealPlanType[],
    initialCreationDone: boolean
  ) {
    plans.forEach((el) => {
      if (!assigned.includes(el._id)) {
        const { week, day } = calculateWeekAndDay(dayOne, el.timestamp);
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
  $: assignMealPlans(data.mealPlans, initialCreationDone);

  async function getAddData(future: boolean) {
    if (future) {
      futureWeeks += 2;
      goto(
        `?pw=${pastWeeks}&fw=${futureWeeks}${
          setting === 'week' ? '#week' + (futureWeeks - 2) : ''
        }`
      );
      calendar[`week${futureWeeks - 1}`] = addCalendarWeeks(
        dayOne,
        futureWeeks - 1
      );
      calendar[`week${futureWeeks}`] = addCalendarWeeks(dayOne, futureWeeks);
    } else {
      pastWeeks -= 2;
      goto(`?pw=${pastWeeks}&fw=${futureWeeks}${'#week' + (pastWeeks + 2)}`);
      calendar[`week${pastWeeks + 1}`] = addCalendarWeeks(
        dayOne,
        pastWeeks + 1
      );
      calendar[`week${pastWeeks}`] = addCalendarWeeks(dayOne, pastWeeks);
    }
  }

  function monitorPosition(event: Event) {
    let scrolledHeight = Math.ceil((event.target as HTMLElement).scrollTop);
    let screenHeight = Math.ceil((event.target as HTMLElement).clientHeight);
    let totalHeight = (event.target as HTMLElement).scrollHeight;
    if (scrolledHeight === 0) {
      getAddData(false);
    } else if (scrolledHeight + screenHeight === totalHeight) {
      getAddData(true);
    }
  }
</script>

<TitleBar title="Calendar" />
{#if calendar}
  <ContentWrapper padding={'0px'} overflow="none">
    <div id="settings-button-wrapper">
      <button
        on:click={() => {
          $CalendarSettings.view = 'day';
          initialCreationDone = false;
          assigned = [];
          goto('#week0');
        }}>D</button
      >
      <button
        on:click={() => {
          $CalendarSettings.view = 'week';
          initialCreationDone = false;
          assigned = [];
          goto('#week0');
        }}>W</button
      >
    </div>
    <div id="calendar-wrapper" on:scroll={monitorPosition}>
      <Calendar {calendar} {setting} />
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
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  #calendar-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  #settings-button-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 20;
  }
</style>
