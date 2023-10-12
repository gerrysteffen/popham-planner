<script lang="ts">
  import CubeListFadeOut from '$lib/components/overview/displays/CubeListFadeOut.svelte';

  export let group: string;
  export let display: 'Cubes' | 'List';
</script>

<div class="group-wrapper">
  <div class="group-title">
    {group}
  </div>
  <div class={display === 'Cubes' ? 'slider' : 'list'}>
    <slot />
  </div>
  {#if display === 'Cubes'}
    <CubeListFadeOut />
  {/if}
</div>

<style>
  .group-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .group-title {
    font-size: x-large;
  }
  .slider {
    display: flex;
    flex-direction: row;
    margin-right: -20px;
    padding-right: 20px;
    gap: 10px;
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .slider::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
</style>
