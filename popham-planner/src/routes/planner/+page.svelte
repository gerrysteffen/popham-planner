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
</script>

<div id="calendar">
  <button on:click={() => getAddData(false)}>click</button>
  {#each Object.keys(calendar).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4))) as weekKey}
    <section id={weekKey}>
      {#each calendar[weekKey] as day}
        <DayWrapper date={day.date} />
      {/each}
    </section>
  {/each}
  <button on:click={() => getAddData(true)}>hello</button>
</div>

<style>
  #calendar {
    margin: -10px -20px -20px -20px;
    position: relative;
  }
  section {
    padding-top: 80px;
    margin-bottom: -80px;
  }
  button {
    margin-top: 100px;
    z-index: 100;
    margin-bottom: 20px;
  }
</style>
