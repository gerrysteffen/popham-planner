<script lang="ts">
  import { goto } from '$app/navigation';
  import type { CalendarType } from '$lib/UIdata/types';
  import DayWrapper from '$lib/components/calendar/DayWrapper.svelte';
  import {
    addCalendarWeeks,
    createInitialCalendar,
  } from '$lib/helperFunctions/calendarDatesCreation';

  const current = Date.now();
  let pastWeeks = -1;
  let futureWeeks = 1;

  let calendar: CalendarType = createInitialCalendar(
    current,
    pastWeeks,
    futureWeeks
  );

  function getAddData(future: boolean) {
    if (future) {
      futureWeeks++;
      calendar[`week${futureWeeks}`] = addCalendarWeeks(current, futureWeeks);
    } else {
      goto(`#week${pastWeeks}`);
      pastWeeks--;
      calendar[`week${pastWeeks}`] = addCalendarWeeks(current, pastWeeks);
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
  <div id="mock-date">
    <DayWrapper date={new Date()} />
  </div>
  <div id="calendar">
    {#each Object.keys(calendar).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4))) as weekKey}
      <section id={weekKey}>
        {#each calendar[weekKey] as day}
          <DayWrapper date={day.date} />
        {/each}
      </section>
    {/each}
  </div>
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
  #mock-date {
    position: absolute;
    top: -70px;
    width: 100%;
  }
  section {
    padding-top: 80px;
    margin-bottom: -80px;
  }
</style>
