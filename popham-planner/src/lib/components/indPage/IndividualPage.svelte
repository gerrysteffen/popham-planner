<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';
  
  import { goto } from '$app/navigation';

  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/indPage/LargeImage.svelte';
  import DeletePending from '$lib/components/indPage/DeletePending.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import Tag from '$lib/components/indPage/tags/Tag.svelte';
  
  export let type: 'meals' | 'restaurants'
  export let data: MealType | RestaurantType;

  $: deletePending = false;
</script>

{#if data}
  <TitleBar title={data.name} />
  <LargeImage image={data.image_url} />
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
  <div id="meal-content">
    <StandardButton
      text="Edit"
      type="button"
      handleClick={() => goto(`/${type}/${data._id}/edit`)}
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
