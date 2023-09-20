<script lang="ts">
  import MarginCorrection from '$lib/components/navbar/MarginCorrection.svelte';
  import NavBar from '../../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../../lib/components/navbar/NavBarLink.svelte';

  const level = 1;
</script>

<MarginCorrection>
  <NavBar>
    <NavBarLink title="Overview" link="/recipes" {level} />
    <NavBarLink title="Add New" link="/recipes/add-new" {level} />
    <NavBarLink title="Search" link="/recipes/search" {level} />
  </NavBar>
</MarginCorrection>
<slot />
