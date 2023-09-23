<script lang="ts">
  import type { RestaurantType } from '$lib/db/restaurants';
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  export let data: { restaurant: RestaurantType };
</script>

{#if data}
  <TitleBar title={data.restaurant.name} />
  <LargeImage image={data.restaurant.image_url} />
{/if}
