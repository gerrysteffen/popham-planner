<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
  import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  export let data;
</script>

<TitleBar title="All Meals & Recipes" />
{#if data}
  <CubeContainer>
    {#each data.meals as meals}
      <PreviewCube data={meals} />
    {/each}
  </CubeContainer>
{/if}
