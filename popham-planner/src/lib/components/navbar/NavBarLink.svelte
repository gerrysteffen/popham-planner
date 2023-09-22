<script lang="ts">
  import { page } from '$app/stores';
  export let padding = '15px';
  export let title: string = '';
  export let link: string = '';
  export let level: number = 0;
  $: selected =
    $page.url.pathname
      .split('/')
      .slice(0, level + 2)
      .join('/') === link;
</script>

<a href={link} class:selected style:padding>
  {title}
</a>

<style>
  a {
    color: black;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffa06e;
    text-decoration: none;
    text-align: center;
  }
  a:focus,
  a:hover {
    background-color: #ff7f50;
  }
  a.selected {
    background-color: #ff7f50;
  }
</style>
