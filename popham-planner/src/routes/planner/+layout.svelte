<script lang="ts">
  import FadeOut from '$lib/components/basicUI/FadeOut.svelte';
  import NavBar from '../../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../../lib/components/navbar/NavBarLink.svelte';

  const level = 1;
</script>

<FadeOut />
<NavBar {level}>
  <NavBarLink title="Meal Calendar" link="/planner" {level} />
  <NavBarLink title="Shopping List" link="/planner/shopping" {level} />
  <NavBarLink title="Notes" link="/planner/notes" {level} />
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
    padding: 10px 20px 20px 20px;
  }
</style>
