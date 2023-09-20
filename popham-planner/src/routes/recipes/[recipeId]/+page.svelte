<script lang="ts">
  import type { Recipe } from '$lib/types/types';
  import TitleBar from '$lib/components/TitleBar.svelte';
  export let data: { recipe: Recipe } | undefined;
</script>

<div>
  <TitleBar title={data?.recipe.name} />
</div>

<style>
</style>
