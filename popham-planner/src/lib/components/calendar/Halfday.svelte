<script lang="ts">
  import type { MealPlanType } from '$lib/UIdata/types';
  import CubeContainer from '../overview/displays/options/CubeContainer.svelte';
  import CubeElement from '../overview/displays/options/CubeElement.svelte';

  export let time: 'lunch' | 'dinner';
  export let meals: MealPlanType[];
</script>

<div class={time}>
  {#each meals as meal}
    <CubeContainer>
      <CubeElement data={meal[meal.planType]} />
    </CubeContainer>
  {/each}
</div>

<style>
  .lunch {
    width: 50%;
    height: 100%;
    border-right: 1px black solid;
  }
  .dinner {
    width: 50%;
    height: 100%;
  }
</style>
