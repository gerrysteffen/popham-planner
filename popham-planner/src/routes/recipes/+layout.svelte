<script lang="ts">
  import MarginCorrection from '$lib/components/navbar/MarginCorrection.svelte';
  import NavBar from '../../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../../lib/components/navbar/NavBarLink.svelte';

  const height = '70px';
  const level = 1;
</script>

<MarginCorrection>
  <NavBar {height}>
    <NavBarLink title="Overview" link="/recipes" {level} />
    <NavBarLink title='Adv. Search and Filter' link="/recipes/search" {level} />
    <NavBarLink title="Add New" link="/recipes/add-new" {level} />
  </NavBar>
</MarginCorrection>
<slot />
