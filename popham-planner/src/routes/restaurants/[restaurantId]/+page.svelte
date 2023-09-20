<script lang="ts">
  import type { Restaurant } from '$lib/types/types';
  import TitleBar from '$lib/components/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  export let data: { restaurant: Restaurant } | undefined;
</script>

<TitleBar title={data?.restaurant.name} />
<LargeImage image={data?.restaurant.image_url} />

<style>
</style>
