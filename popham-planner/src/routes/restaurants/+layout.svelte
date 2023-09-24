<script lang="ts">
  import FadeOut from '$lib/components/basicUI/FadeOut.svelte';
  import NavBar from '../../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../../lib/components/navbar/NavBarLink.svelte';

  const level = 1;
</script>

<FadeOut />
<NavBar {level}>
  <NavBarLink title="Overview" link="/restaurants" {level} />
  <NavBarLink
    title="Adv. Search and Filter"
    link="/restaurants/search"
    {level}
  />
  <NavBarLink title="Add New" link="/restaurants/add-new" {level} />
</NavBar>
<div id="content">
  <slot />
</div>

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    overflow: scroll;
    padding: 10px 10px 20px 10px;
  }
</style>
