<script lang="ts">
  import type { MealPlanType } from '$lib/UIdata/types';
  import MealPlanCube from '../mealplan/MealPlanCube.svelte';

  export let time: 'lunch' | 'dinner' | 'all';
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
    /* border-right: 1px black solid; */
  }
  .dinner {
    width: 50%;
    height: 100%;
  }
</style>
