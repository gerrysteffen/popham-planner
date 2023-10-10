<script lang="ts">
  import { colors } from '$lib/UIdata/cssSelectors';
  import type { MealDateType } from '$lib/UIdata/types';

  import Halfday from './Halfday.svelte';

  export let data: MealDateType;
  export let setting: 'day' | 'week';

  $: date = new Date(data.timestamp);
  $: weekend = date.getDay() === 0 || date.getDay() === 6;

  $: width = setting === 'day' || !weekend ? '100%' : '50%';
  $: height = setting === 'day' ? '150px' : !weekend ? '16.7%' : '16.6%';

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
</script>

<div
  class="day"
  id={String(data.timestamp)}
  style="width: {width}; height: {height};"
>
  <div class="top day-date" style="color: {colors.planner.unselected}">
    {('0' + date.getDate()).slice(-2)}
    {monthNames[date.getMonth()]}
  </div>
  <div
    class="top day-weekday"
    style="background-color: {colors.planner.unselected}"
  >
    {dayNames[date.getDay()]}
  </div>
  {#if setting === 'week' && weekend}
    <Halfday time={'all'} mealPlans={[...data.lunch, ...data.dinner]} />
  {:else}
    <Halfday time={'lunch'} mealPlans={data.lunch} />
    <Halfday time={'dinner'} mealPlans={data.dinner} />
  {/if}
</div>

<style>
  .day {
    border-bottom: 1px black solid;
    position: relative;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .top {
    z-index: 10;
  }
  .day-weekday {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
  }
  .day-date {
    position: absolute;
    top: 10px;
    left: 50px;
    width: 80px;
    height: 30px;
    display: flex;
    padding-right: 10px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
