<script lang="ts">
  export let group: 'string';
  // export let display: 'Cubes' | 'List';
</script>

<div class="group-wrapper">
  <div class="group-title">
    {group}
  </div>
  <div class="group-slider">
    <slot />
  </div>
</div>

<style>
  .group-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .group-title {
    font-size: x-large;
  }
  .group-slider{
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 10px;
  }
</style>
