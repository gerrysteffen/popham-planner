<script lang="ts">
  import { page } from '$app/stores';
  import NavBar from '../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../lib/components/navbar/NavBarLink.svelte';

  $: path = $page.url.pathname;

  const level = 0;
</script>

{#if path !== '/'}
  <NavBar {level}>
    <NavBarLink title="Meals & Recipes" link="/meals" {level} />
    <NavBarLink title="Restaurants & Take-Out" link="/restaurants" {level} />
    <NavBarLink
      title="Plan Your Week"
      link="/planner?pw=-1&fw=1#week0"
      {level}
    />
  </NavBar>
  <div id="content">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
  }
  @media only screen and (max-device-height: 667px) {
    #content {
      bottom: 70px;
    }
  }
</style>
