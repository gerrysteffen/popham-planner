<script lang="ts">
  import { page } from '$app/stores';
  import { colors } from '$lib/utils/cssColorSelectors';
  export let icon: string;
  export let link: string;
  export let i: number;
  export let category: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdSearch from 'svelte-icons/md/MdSearch.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdAdd from 'svelte-icons/md/MdAdd.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdToday from 'svelte-icons/md/MdToday.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdShoppingCart from 'svelte-icons/md/MdShoppingCart.svelte';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import MdBorderColor from 'svelte-icons/md/MdBorderColor.svelte';

  // use of search params and sections made it necessary to cut any #-delimited parts
  $: linkCompare = link.includes('?') ? link.slice(0, link.indexOf('?')) : link;

  $: selected = $page.url.pathname.split('/').slice(0, 3).join('/') === linkCompare;
</script>

<a href={link} id={`${icon}-link`} class:rounded={i === 0}>
  <div
    class="icon-wrapper"
    style="background-color: {selected ? colors[category].unselected : colors[category].selected}"
  >
    {#if icon === 'overview'}
      <MdMenu />
    {:else if icon === 'search'}
      <MdSearch />
    {:else if icon === 'add'}
      <MdAdd />
    {:else if icon === 'calendar'}
      <MdToday />
    {:else if icon === 'shopping'}
      <MdShoppingCart />
    {:else if icon === 'notes'}
      <MdBorderColor />
    {/if}
  </div>
</a>

<style>
  a {
    color: black;
    font-weight: bold;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    text-align: center;
  }
  .icon-wrapper {
    position: absolute;
    line-height: 1.25;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .rounded {
    border-top-left-radius: 10px;
  }
</style>
