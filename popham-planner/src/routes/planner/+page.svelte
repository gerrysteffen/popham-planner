<script lang="ts">
  import { goto } from '$app/navigation';
  import type { MealType, RestaurantType } from '$lib/UIdata/types';
  import DayWrapper from '$lib/components/calendar/DayWrapper.svelte';

  const current = Date.now();

  const oneDay = 1000 * 60 * 60 * 24;

  let pastWeeks = 1;
  let futureWeeks = 1;

  type MealDate = {
    date: Date;
    lunch: [MealType | RestaurantType] | [];
    dinner: [MealType | RestaurantType] | [];
  };

  type Calendar = {
    [key: string]: MealDate[];
  };

  const initialCalendar = new Array(21).fill('').map(
    (el, i) =>
      ({
        date: new Date(current + (i - 7) * oneDay),
        lunch: [],
        dinner: [],
      } as MealDate)
  );

  let calendar: Calendar;

  $: calendar = {
    'week+0': initialCalendar.slice(7, 14),
    'week-1': initialCalendar.slice(0, 7),
    'week+1': initialCalendar.slice(14, 21),
  };

  function handleClick() {
    goto(`#week-${pastWeeks}`);
    pastWeeks++;
    const newWeek = new Array(7).fill('').map(
      (el, i) =>
        ({
          date: new Date(current + (i - pastWeeks * 7 * oneDay)),
          lunch: [],
          dinner: [],
        } as MealDate)
    );
    calendar[`week-${pastWeeks}`] = newWeek;
  }
</script>

<div id="calendar">
  {#each Object.keys(calendar).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4))) as weekKey}
    <section id={weekKey}>
      {#each calendar[weekKey] as day}
        <DayWrapper date={day.date} />
      {/each}
    </section>
  {/each}
</div>

<style>
  #calendar {
    margin: -10px -20px -20px -20px;
    position: relative;
  }
</style>
