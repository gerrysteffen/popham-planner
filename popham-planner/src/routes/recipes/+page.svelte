<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
  import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/TitleBar.svelte';
  import exampleData from '$lib/exampleData';
</script>

<TitleBar title="All Recipes" />
<CubeContainer>
  {#each exampleData.recipes as recipe}
    <PreviewCube data={recipe} cat="recipes" />
  {/each}
</CubeContainer>

<style>
</style>
