<script lang="ts">
  import { colors } from '$lib/UIdata/cssSelectors';
  import type { MealDateType } from '$lib/UIdata/types';
  import { mockMealDate } from '$lib/helperFunctions/calendarDatesCreation';

  import Halfday from './Halfday.svelte';

  export let data: MealDateType = mockMealDate;

  $: date = new Date(data.timestamp);

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

<div class="day" id={String(data.timestamp)}>
  <div
    class="day-weekday"
    style="background-color: {colors.planner.unselected}"
  >
    {dayNames[date.getDay()]}
  </div>
  <div class="day-date" style="color: {colors.planner.unselected}">
    {date.getDate()}
    {monthNames[date.getMonth()]}
  </div>
  <Halfday time={'lunch'} meals={data.lunch} />
  <Halfday time={'dinner'} meals={data.dinner} />
</div>

<style>
  .day {
    width: 100%;
    border-bottom: 1px black solid;
    height: 150px;
    position: relative;
    font-weight: bold;
    display: flex;
    justify-items: space-between;
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
    left: 70px;
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>
