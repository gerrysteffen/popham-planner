<script lang="ts">
  import ContentWrapper from '$lib/components/navbar/ContentWrapper.svelte';
  import NavBar from '../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../lib/components/navbar/NavBarLink.svelte';

  const level = 0;
</script>

<NavBar>
  <NavBarLink title="Dashboard" link="/" {level} />
  <NavBarLink title="Recipes" link="/recipes" {level} />
  <NavBarLink title="Restaurants" link="/restaurants" {level} />
</NavBar>
<div id='content'>
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
    bottom: 70px;
  }
</style>
