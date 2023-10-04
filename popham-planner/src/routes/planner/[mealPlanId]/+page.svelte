<script lang="ts">
  import type { MealPlanType } from '$lib/UIdata/types';

  // import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { mealPlan: MealPlanType };
</script>

<div>{data.mealPlan[data.mealPlan.planType].name}</div>

<!-- <IndividualPage type="meal" data={data.meal} /> -->
