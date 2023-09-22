<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import type { TRecipe } from '$lib/db/recipes';
  import DeletePending from '$lib/components/DeletePending.svelte';
  export let data: { recipe: TRecipe };

  $: deletePending = false;
  const nextPage = '/recipes';
</script>

{#if data}
  <TitleBar title={data.recipe.name} />
  <LargeImage image={data.recipe.image_url} />
  <!-- <button on:click={() => (deletePending = !deletePending)}>Delete</button> -->
{/if}

{#if deletePending}
  <DeletePending bind:deletePending {nextPage} />
{/if}
