<script lang="ts">
  import type { Restaurant } from '$lib/types/types';
  import TitleBar from '$lib/components/TitleBar.svelte';
  export let data: { restaurant: Restaurant } | undefined;
</script>

<div>
  <TitleBar title={data?.restaurant.name} />
</div>

<style>
</style>
