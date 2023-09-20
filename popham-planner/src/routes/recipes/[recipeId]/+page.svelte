<script lang="ts">
  import type { Recipe } from '$lib/types/types';
  import TitleBar from '$lib/components/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  export let data: { recipe: Recipe } | undefined;
</script>

<TitleBar title={data?.recipe.name} />
<LargeImage image={data?.recipe.image_url} />

<style>
</style>
