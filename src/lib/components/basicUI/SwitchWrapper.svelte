<script lang="ts">
  let open = false;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdSort from 'svelte-icons/md/MdSort.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdArrowDropDown from 'svelte-icons/md/MdArrowDropDown.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdArrowDropUp from 'svelte-icons/md/MdArrowDropUp.svelte';
  import { fly } from 'svelte/transition';
</script>

{#if open}
  <div id="switch-wrapper" transition:fly={{ y: -120, duration: 500, opacity: 1 }}>
    <div id="settings-container">
      <slot />
    </div>
    <button on:click={() => (open = !open)}>
      <MdSort />
      <MdArrowDropUp />
    </button>
  </div>
{:else}
  <div id="switch-wrapper" transition:fly={{ y: 120, duration: 500, opacity: 1 }}>
    <button on:click={() => (open = !open)}>
      <MdSort />
      <MdArrowDropDown />
    </button>
  </div>
{/if}

<style>
  #switch-wrapper {
    top: 50px;
    position: absolute;
    left: 20px;
    right: 20px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  #settings-container {
    width: 100%;
    background-color: #dcdcdc;
    border: 1px solid #bebebe;
    border-top: none;
    border-radius: 0 0 10px 10px;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
  }
  button {
    height: 30px;
    border: none;
    background: #bebebe;
    width: 70px;
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    color: black;
  }
</style>
