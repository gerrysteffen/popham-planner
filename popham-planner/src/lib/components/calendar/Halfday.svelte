<script lang="ts">
  import type { MealPlanType } from '$lib/UIdata/types';
  import MealPlanCube from '../mealplan/MealPlanCube.svelte';
  import CubeContainer from '../overview/displays/options/CubeContainer.svelte';

  export let time: 'lunch' | 'dinner';
  export let mealPlans: MealPlanType[];
</script>

<div class={time + ' center'}>
  {#each mealPlans as mealPlan}
    <MealPlanCube data={mealPlan} />
  {/each}
</div>

<style>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
