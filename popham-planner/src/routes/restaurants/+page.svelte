<script lang="ts">
  import type { RestaurantType } from '$lib/UIdata/types';

  import OverviewPage from '$lib/components/overview/OverviewPage.svelte';

  export let data: { restaurants: RestaurantType[] };

  const title = 'All Restaurants';
</script>

<OverviewPage {title} data={data.restaurants} />
