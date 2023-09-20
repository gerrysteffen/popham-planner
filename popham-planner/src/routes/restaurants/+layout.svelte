<script lang="ts">
  import MarginCorrection from '$lib/components/navbar/MarginCorrection.svelte';
  import NavBar from '../../lib/components/navbar/NavBar.svelte';
  import NavBarLink from '../../lib/components/navbar/NavBarLink.svelte';

  const level = 1;
</script>

<MarginCorrection>
  <NavBar>
    <NavBarLink title="Overview" link="/restaurants" {level} />
    <NavBarLink title='Adv. Search and Filter' link="/restaurants/search" {level} />
    <NavBarLink title="Add New" link="/restaurants/add-new" {level} />
  </NavBar>
</MarginCorrection>
<slot />
