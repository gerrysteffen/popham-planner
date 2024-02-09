<script lang="ts">
  let open = false;

  function toggleOpen() {
    open = !open;
  }

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
  <button id="close-modal" on:click={toggleOpen} />
  <div id="switch-wrapper" transition:fly={{ y: -120, duration: 500, opacity: 1 }}>
    <div id="settings-container">
      <slot />
    </div>
    <button on:click={toggleOpen}>
      <MdSort />
      <MdArrowDropUp />
    </button>
  </div>
{:else}
  <div id="switch-wrapper" transition:fly={{ y: 120, duration: 500, opacity: 1 }}>
    <button on:click={toggleOpen}>
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
  #switch-wrapper button {
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

  #close-modal {
    top: 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 19;
    background-color: transparent;
    border: none;
  }
</style>
