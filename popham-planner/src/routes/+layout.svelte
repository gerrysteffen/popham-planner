<script lang="ts">
  import ContentWrapper from '$lib/components/navbar/ContentWrapper.svelte';
  import NavBar from '../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../lib/components/navbar/NavBarLink.svelte';

  const level = 0;
</script>

<NavBar {level}>
  <NavBarLink title="Meals & Recipes" link="/recipes" {level} />
  <NavBarLink title="Restaurants & Take-Out" link="/restaurants" {level} />
  <NavBarLink title="Planner" link="/" {level} />
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
    bottom: 80px;
  }
  @media only screen and (max-device-height: 667px) {
    #content {
      bottom: 70px;
    }
  }
</style>
