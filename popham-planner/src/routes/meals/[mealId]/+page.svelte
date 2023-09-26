<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import type { MealType } from '$lib/UIdata/types';
  import DeletePending from '$lib/components/DeletePending.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import { goto } from '$app/navigation';
  import Tag from '$lib/components/Tag.svelte';
  export let data: { meal: MealType };

  $: deletePending = false;
</script>

{#if data}
  <TitleBar title={data.meal.name} />
  <LargeImage image={data.meal.image_url} />
  <div id="tag-container">
    {#if data.meal.mainCategory}
      <div id="main-cat-wrapper">
        <Tag text={data.meal.mainCategory} type="main-category" />
      </div>
    {/if}
    {#each data.meal.categories as cat}
      {#if cat !== data.meal.mainCategory}
        <Tag text={cat} type="category" />
      {/if}
    {/each}
    {#each data.meal.tags as tag}
      <Tag text={'#' + tag} type="tag" />
    {/each}
  </div>
  <div>
    {data.meal.description}
  </div>
  <div id="meal-content">
    <StandardButton
      text="Edit"
      type="button"
      handleClick={() => goto(`/meals/${data.meal._id}/edit`)}
    />
    <StandardButton
      text="Delete"
      type="button"
      handleClick={() => (deletePending = !deletePending)}
    />
  </div>
{/if}

{#if deletePending}
  <DeletePending bind:deletePending />
{/if}

<style>
  #meal-content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
