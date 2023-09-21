<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
  import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/TitleBar.svelte';
  export let data;
</script>

<TitleBar title="All Restaurants" />
{#if data}
  <CubeContainer>
    {#each data.restaurants as restaurant}
      <PreviewCube data={restaurant} cat="restaurants" />
    {/each}
  </CubeContainer>
{/if}

<style>
</style>
