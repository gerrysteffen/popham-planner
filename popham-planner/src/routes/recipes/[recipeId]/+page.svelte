<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte';
  import LargeImage from '$lib/components/LargeImage.svelte';
  import type { TRecipe } from '$lib/db/recipes';
  export let data: { recipe: TRecipe };
</script>

{#if data}
<TitleBar title={data.recipe.name} />
<LargeImage image={data.recipe.image_url} />
{/if}