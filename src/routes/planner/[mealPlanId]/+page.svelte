<script lang="ts">
  import { goto } from '$app/navigation';

  import type { MealPlanType } from '$lib/utils/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import ButtonOneLineWrapper from '$lib/components/forms/ButtonOneLineWrapper.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import DeletePendingOverlay from '$lib/components/indPage/DeletePendingOverlay.svelte';

  // import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { mealPlan: MealPlanType };

  let deletePending = false;
</script>

<TitleBar title="View Planned Meal" />

<ContentWrapper>
  <div>{new Date(data.mealPlan.timestamp).toLocaleDateString()}</div>
  <div>{data.mealPlan.mealType}</div>
  <div>{data.mealPlan[data.mealPlan.planType]?.name}</div>
  <ButtonOneLineWrapper>
    <StandardButton
      text="Edit"
      type="button"
      handleClick={() => goto(`/planner/${data.mealPlan._id}`)}
    />
    <StandardButton
      text="Delete"
      type="button"
      handleClick={() => (deletePending = !deletePending)}
    />
  </ButtonOneLineWrapper>

  {#if deletePending}
    <DeletePendingOverlay bind:deletePending />
  {/if}
  <!-- <IndividualPage type="meal" data={data.meal} /> -->
</ContentWrapper>
