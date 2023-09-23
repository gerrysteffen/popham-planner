<script lang="ts">
  import type { IRestaurant } from '$lib/db/restaurants';
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  export let data: { restaurant: IRestaurant };
</script>

{#if data}
  <TitleBar title={data.restaurant.name} />
  <LargeImage image={data.restaurant.image_url} />
{/if}
