<script lang="ts">
  import { fly } from 'svelte/transition';

  export let href: string;
  export let topPosition: number;
  export let transitionY: number;
  export let clickHandler: () => void;
  export let color: { selected: string; unselected: string };
  export let title: string;
</script>

<a
  {href}
  style="top: {topPosition}px;"
  transition:fly={{ y: transitionY, duration: 500, opacity: 1 }}
>
  <button on:click={() => clickHandler()} style="background-color: {color.selected}; border: 1px solid {color.unselected};">
    {title}
  </button>
</a>

<style>
  a {
    position: absolute;
    color: black;
    text-decoration: none;
    top: 0;
    left: 10px;
    right: 10px;
    height: 45px;
  }
  button {
    height: 100%;
    color: black;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: large;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
