<script lang="ts">
  import type { CalendarType } from '$lib/UIdata/types';
  import DayWrapper from '$lib/components/calendar/DayWrapper.svelte';
  import { mockMealDate } from '$lib/helperFunctions/calendarDatesCreation';

  export let setting: 'day' | 'week';

  export let calendar: CalendarType;
</script>

{#each Object.keys(calendar).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4))) as weekKey}
  <section
    id={weekKey}
    style="height: {setting === 'week' ? '100%' : '1050px'}; {setting === 'week'
      ? 'scroll-snap-align: start;'
      : ''}"
  >
    {#each calendar[weekKey] as day}
      <DayWrapper data={day} {setting} />
    {/each}
    {#if setting === 'week'}
    <DayWrapper data={null} {setting}/>
    {/if}
  </section>
{/each}

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>
