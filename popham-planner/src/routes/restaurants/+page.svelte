<script lang="ts">
  import PreviewCube from "$lib/components/PreviewCube.svelte";
import TitleBar from "$lib/components/TitleBar.svelte";
  import exampleData from '../../lib/exampleData';

</script>

<div>
  <TitleBar title='All Restaurants' />

</div>
  {#each exampleData.restaurants as restaurant} 
    <PreviewCube />
    <div>{restaurant.name}</div>
  {/each}
<style>
  
</style>
