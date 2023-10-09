<script lang="ts">
  import { colors } from '$lib/UIdata/cssSelectors';
  import type { CalendarType } from '$lib/UIdata/types';
  import DayWrapper from '$lib/components/calendar/DayWrapper.svelte';
  import { mockMealDate } from '$lib/helperFunctions/calendarDatesCreation';

  export let calendar: CalendarType;
</script>

<div id="mock-date">
  <DayWrapper data={mockMealDate} />
</div>
<div id="calendar">
  {#each Object.keys(calendar).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4))) as weekKey}
    <section id={weekKey}>
      {#each calendar[weekKey] as day}
        <DayWrapper data={day} />
      {/each}
    </section>
  {/each}
</div>
<div id="titles" class="title-background" />
<div id="titles" style="color: {colors['planner']['selected']}">
  <div class="title">LUNCH</div>
  <div class="title">DINNER</div>
</div>

<style>
  #mock-date {
    position: absolute;
    top: -70px;
    width: 100%;
  }
  #titles {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    height: 80px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
  }
  .title {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .title-background {
    background-color: white;
    opacity: 0.7;
  }
  section {
    padding-top: 80px;
    margin-bottom: -80px;
  }
</style>
