<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import DeletePending from '$lib/components/DeletePending.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import { goto } from '$app/navigation';
  import type { RestaurantType } from '$lib/UIdata/types';
  export let data: { restaurant: RestaurantType };

  $: deletePending = false;
</script>

{#if data}
  <TitleBar title={data.restaurant.name} />
  <LargeImage image={data.restaurant.image_url} />
  <div>
    {data.restaurant.description}
  </div>
  <div id="restaurant-content">
    <StandardButton
      text="Edit"
      type="button"
      handleClick={() => goto(`/restaurants/${data.restaurant._id}/edit`)}
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
  #restaurant-content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
</style>
