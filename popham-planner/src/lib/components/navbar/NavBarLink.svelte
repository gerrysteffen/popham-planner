<script lang="ts">
  import { page } from '$app/stores';
  export let title: string;
  export let link: string;
  export let level: number;
  $: selected =
    $page.url.pathname
      .split('/')
      .slice(0, level + 2)
      .join('/') === link;
</script>

<a href={link} class:selected>
  <div class="link-text">
    {title}
  </div>
  {#if level === 0}
    <div class="add-padding" />
  {/if}
</a>

<style>
  a {
    color: black;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
  .link-text {
    line-height: 1.25;
    padding: 15px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-padding {
    height: 10px !important;
  }
</style>
