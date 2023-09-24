<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
  import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  export let data;
</script>

<TitleBar title="All Restaurants" />
{#if data}
  <CubeContainer>
    {#each data.restaurants as restaurant}
      <PreviewCube data={restaurant} />
    {/each}
  </CubeContainer>
{/if}
