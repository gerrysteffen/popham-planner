<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import type { MealType } from '$lib/db/meals';
  import DeletePending from '$lib/components/DeletePending.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import { goto } from '$app/navigation';
  export let data: { meal: MealType };

  $: deletePending = false;
</script>

{#if data}
  <TitleBar title={data.meal.name} />
  <LargeImage image={data.meal.image_url} />
  <div>
    {data.meal.description}
  </div>
  <div id="meal-content">
    <StandardButton text='Edit' type='button' handleClick={() => goto(`/meals/${data.meal._id}/edit`)} />
    <StandardButton text='Delete' type='button' handleClick={() => (deletePending = !deletePending)} />
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
</style>
