<script lang="ts">
  import CubeContainer from './options/CubeContainer.svelte';
  import ListContainer from './options/ListContainer.svelte';

  export let display: 'Cubes' | 'List';
</script>

{#if display === 'Cubes'}
  <CubeContainer>
    <slot />
  </CubeContainer>
{:else if display === 'List'}
  <ListContainer>
    <slot />
  </ListContainer>
{/if}
