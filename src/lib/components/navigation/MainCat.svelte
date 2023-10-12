<script lang="ts">
  import { fly } from 'svelte/transition';

  export let topPosition: number;
  export let transitionY: number;
  export let clickHandler: () => void;
  export let color: { selected: string; unselected: string };
  export let title: string;
</script>

<button
  id={`${title.toLowerCase()}-link`}
  on:click={() => clickHandler()}
  style="top: {topPosition}px; background-color: {color.selected}; border: 1px solid {color.unselected};"
  transition:fly={{ y: transitionY, duration: 500, opacity: 1 }}
>
  {title}
</button>

<style>
  button {
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    height: 45px;
    color: black;
    border-radius: 5px;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
