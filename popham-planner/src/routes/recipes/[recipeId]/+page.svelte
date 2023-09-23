<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import type { TRecipe } from '$lib/db/recipes';
  import DeletePending from '$lib/components/DeletePending.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  export let data: { recipe: TRecipe };

  $: deletePending = false;
</script>

{#if data}
  <TitleBar title={data.recipe.name} />
  <LargeImage image={data.recipe.image_url} />
  <div id="recipe-content">
    <StandardButton text='Delete' type='button' handleClick={() => (deletePending = !deletePending)} />
    <!-- <button on:click={() => (deletePending = !deletePending)}>Delete</button> -->
  </div>
{/if}

{#if deletePending}
  <DeletePending bind:deletePending />
{/if}

<style>
  #recipe-content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
</style>
