<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
  import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/TitleBar.svelte';
  export let data;
</script>

<TitleBar title="All Recipes" />
{#if data}
  <CubeContainer>
    {#each data.recipes as recipe}
      <PreviewCube data={recipe} cat="recipes" />
    {/each}
  </CubeContainer>
{/if}
