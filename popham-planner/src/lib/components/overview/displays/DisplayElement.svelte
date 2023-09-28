<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';
  import CubeElement from './options/CubeElement.svelte';
  import ListElement from './options/ListElement.svelte';

  export let display: 'Cubes' | 'List';
  export let data: MealType | RestaurantType;
</script>

{#if display === 'Cubes'}
  <CubeElement {data} />
{:else if display === 'List'}
  <ListElement {data} />
{/if}

<style>
</style>
