<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';

  import { goto } from '$app/navigation';

  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/indPage/LargeImage.svelte';
  import DeletePendingOverlay from '$lib/components/indPage/DeletePendingOverlay.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import Tag from '$lib/components/indPage/tags/Tag.svelte';
  import ButtonOneLineWrapper from '../forms/ButtonOneLineWrapper.svelte';
  import AddMealPlanOverlay from '../mealplan/AddMealPlanOverlay.svelte';

  export let type: 'meal' | 'restaurant';
  export let data: MealType | RestaurantType;

  $: deletePending = false;
  $: addMealPlanPending = false;
</script>

{#if data}
  <TitleBar title={data.name} />
  <LargeImage image={data.image_url} />
  <div id="content-wrapper">
    <div id="tag-container">
      {#if data.mainCategory}
        <div id="main-cat-wrapper">
          <Tag text={data.mainCategory} type="main-category" />
        </div>
      {/if}
      {#each data.categories as cat}
        {#if cat !== data.mainCategory}
          <Tag text={cat} type="category" />
        {/if}
      {/each}
      {#each data.tags as tag}
        <Tag text={'#' + tag} type="tag" />
      {/each}
    </div>
    <div>
      {data.description}
    </div>
    <ButtonOneLineWrapper>
      <StandardButton
        text="Add to Your Planner"
        type="button"
        handleClick={() => {
          addMealPlanPending = !addMealPlanPending;
        }}
      />
    </ButtonOneLineWrapper>
    <ButtonOneLineWrapper>
      <StandardButton
        text="Edit"
        type="button"
        handleClick={() => goto(`/${type}s/${data._id}/edit`)}
      />
      <StandardButton
        text="Delete"
        type="button"
        handleClick={() => (deletePending = !deletePending)}
      />
    </ButtonOneLineWrapper>
  </div>
{/if}

{#if deletePending}
  <DeletePendingOverlay bind:deletePending />
{/if}
{#if addMealPlanPending}
  <AddMealPlanOverlay id={data._id} bind:addMealPlanPending planType={type} />
{/if}

<style>
  #content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 10px;
  }
  #tag-container {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 5px;
  }
  #main-cat-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
</style>
