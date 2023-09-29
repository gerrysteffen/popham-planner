<script lang="ts">
  import type {
    MealType,
    OverviewCriteria,
    RestaurantType,
  } from '$lib/UIdata/types';
  import { groupElements } from '$lib/helperFunctions/grouping';
  import { sortElements } from '$lib/helperFunctions/sorting';

  import Switch from '../basicUI/Switch.svelte';
  import SwitchWrapper from '../basicUI/SwitchWrapper.svelte';
  import TitleBar from '../basicUI/TitleBar.svelte';
  import DisplayContainer from './displays/DisplayContainer.svelte';
  import DisplayElement from './displays/DisplayElement.svelte';
  import GroupWrapper from './displays/GroupWrapper.svelte';

  export let data: MealType[] | RestaurantType[];

  export let title: string;
  export let criteria: OverviewCriteria = 'name';
  export let ascending: boolean = true;
  export let cubes: boolean = true;
  let display: 'Cubes' | 'List';
  $: display = cubes ? 'Cubes' : 'List';
  export let grouped: boolean = true;

  $: groupSwitchDisabled = disableGrouping(criteria);
  function disableGrouping(criteria: string) {
    if (criteria === 'updatedAt' || criteria === 'createdAt') {
      grouped = false;
      return true;
    } else if (
      criteria === 'categories' ||
      criteria === 'mainCategory' ||
      criteria === 'tags'
    ) {
      grouped = true;
      return true;
    } else {
      return false;
    }
  }

  let criteriaOptions = {
    name: 'By Name',
    tags: 'By Tag',
    categories: 'By Categories',
    mainCategory: 'By Main Category',
    // createdAt: 'By Created At',
    // updatedAt: 'By Updated At',
    // priceLevel: number; // TODO
    // rating: number; // TODO
  };

  $: sortedData = sortElements(data, criteria, ascending);
  let groupedSortedData: [string, [MealType | RestaurantType]][];

  $: groupedSortedData = groupElements(sortedData, criteria, ascending);
</script>

<TitleBar {title} />
<SwitchWrapper>
  <select name="criteria" bind:value={criteria}>
    {#each Object.entries(criteriaOptions) as [crit, text]}
      <option value={crit}>{text}</option>
    {/each}
  </select>
  <Switch
    title="Grouped"
    bind:checked={grouped}
    disabled={groupSwitchDisabled}
  />
  <Switch title="Ascending" bind:checked={ascending} />
  <Switch title="Cubes" bind:checked={cubes} />
</SwitchWrapper>

<DisplayContainer {display}>
  {#if grouped}
    <!-- {#each Object.entries(groupedSortedData) as [group, groupArr]} --->
    {#each groupedSortedData as [group, groupArr]}
      <GroupWrapper {group} {display}>
        {#if groupArr !== null}
        {#each groupArr as dataEl}
        <DisplayElement {display} data={dataEl} />
        {/each}
        {/if}
      </GroupWrapper>
    {/each}
  {:else}
    {#each sortedData as dataEl}
      <DisplayElement {display} data={dataEl} />
    {/each}
  {/if}
</DisplayContainer>

<style>
  select {
    width: 150px;
    height: 34px;
  }
</style>
