<script lang="ts">
  import ContentWrapper from '$lib/components/navbar/ContentWrapper.svelte';
  import NavBar from '../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../lib/components/navbar/NavBarLink.svelte';

  const level = 0;
  const height = '90px';
  const padding = '15px 15px 35px 15px';
</script>

<NavBar {height}>
  <NavBarLink title="Dashboard" link="/" {level} {padding} />
  <NavBarLink title="Recipes" link="/recipes" {level} {padding} />
  <NavBarLink title="Restaurants" link="/restaurants" {level} {padding} />
</NavBar>
<div id="content">
  <ContentWrapper>
    <slot />
  </ContentWrapper>
</div>

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 90px;
  }
</style>
