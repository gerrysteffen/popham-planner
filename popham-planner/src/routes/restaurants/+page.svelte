<script lang="ts">
  import CubeContainer from '$lib/components/CubeContainer.svelte';
import PreviewCube from '$lib/components/PreviewCube.svelte';
  import TitleBar from '$lib/components/TitleBar.svelte';
  import exampleData from '../../lib/exampleData';
</script>

<TitleBar title="All Restaurants" />
<CubeContainer>
  {#each exampleData.restaurants as restaurant}
    <PreviewCube data={restaurant} cat='restaurants' />
  {/each}
</CubeContainer>

<style>
  
</style>
