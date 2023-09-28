<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';

  import Switch from '../basicUI/Switch.svelte';
  import SwitchWrapper from '../basicUI/SwitchWrapper.svelte';
  import TitleBar from '../basicUI/TitleBar.svelte';
  import DisplayContainer from './displays/DisplayContainer.svelte';
  import DisplayElement from './displays/DisplayElement.svelte';
  import GroupWrapper from './displays/GroupWrapper.svelte';

  export let data: MealType[] | RestaurantType[];

  export let title: string;
  export let ascending: boolean = true;
  export let cubes: boolean = true;
  $: display = cubes ? 'Cubes' : 'List';
  export let grouped: boolean = false;

  let sortedData = data.slice();
  let sortBy = (column, ascending: boolean) => {
    let sortLogic = (a, b) => {
      const A = adjustForUmlaute(a[column]);
      const B = adjustForUmlaute(b[column]);
      return A < B ? (ascending ? -1 : 1) : A > B ? (ascending ? 1 : -1) : 0;
    };

    sortedData = sortedData.sort(sortLogic);
  };
  $: sortBy('name', ascending);

  let groupedSortedData = {};
  const umlautMap = {
    Ü: 'U',
    Ä: 'A',
    Ö: 'O',
  };
  function adjustForUmlaute(word) {
    let firstLetter = word.slice(0, 1).toUpperCase();
    if (/[\u00dc|\u00c4|\u00d6]/.test(firstLetter)) {
      firstLetter = umlautMap[firstLetter];
    }
    return firstLetter + word.slice(1);
  }
  function categorize() {
    groupedSortedData = {};
    sortedData.forEach((el) => {
      let firstLetter = el.name.slice(0, 1).toUpperCase();
      const umlautMap = {
        Ü: 'U',
        Ä: 'A',
        Ö: 'O',
      };
      if (/[\u00dc|\u00c4|\u00d6]/.test(firstLetter)) {
        firstLetter = umlautMap[firstLetter];
      }
      if (groupedSortedData[firstLetter]) {
        groupedSortedData[firstLetter].push(el);
      } else {
        groupedSortedData[firstLetter] = [el];
      }
    });
  }
  $: grouped && categorize();
</script>

<TitleBar {title} />
<SwitchWrapper>
  <Switch title="Ascending" bind:checked={ascending} />
  <Switch title="Cubes" bind:checked={cubes} />
  <Switch title="Grouped" bind:checked={grouped} />
</SwitchWrapper>

<DisplayContainer {display}>
  {#if grouped}
    {#each Object.entries(groupedSortedData) as [group, groupArr]}
      <GroupWrapper {group} {display}>
        {#each groupArr as dataEl}
          <DisplayElement {display} data={dataEl} />
        {/each}
      </GroupWrapper>
    {/each}
  {:else}
    {#each sortedData as dataEl}
      <DisplayElement {display} data={dataEl} />
    {/each}
  {/if}
</DisplayContainer>
