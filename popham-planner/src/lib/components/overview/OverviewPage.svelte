<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';

  import Switch from '../basicUI/Switch.svelte';
  import SwitchWrapper from '../basicUI/SwitchWrapper.svelte';
  import TitleBar from '../basicUI/TitleBar.svelte';
  import DisplayContainer from './displays/DisplayContainer.svelte';
  import DisplayElement from './displays/DisplayElement.svelte';

  export let data: MealType[] | RestaurantType[];

  export let title: string;
  export let ascending: boolean = true;
  export let cubes: boolean = true;
  $: display = cubes ? 'Cubes' : 'List';
  export let grouped: boolean = false;

  let sortedData = data.slice();

  let sortBy = (column, ascending: boolean) => {
    let sortLogic = (a, b) =>
      a[column] < b[column]
        ? ascending
          ? -1
          : 1
        : a[column] > b[column]
        ? ascending
          ? 1
          : -1
        : 0;

    sortedData = sortedData.sort(sortLogic);
  };

  $: sortBy('name', ascending);
</script>

<TitleBar {title} />
<SwitchWrapper>
  <Switch title="Ascending" bind:checked={ascending} />
  <Switch title="Cubes" bind:checked={cubes} />
  <Switch title="Grouped" bind:checked={grouped} />
</SwitchWrapper>

<DisplayContainer {display}>
  {#each sortedData as dataEl}
    <DisplayElement {display} data={dataEl} />
  {/each}
</DisplayContainer>
