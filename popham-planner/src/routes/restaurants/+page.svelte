<script lang="ts">
  import type { RestaurantType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import OverviewPage from '$lib/components/overview/OverviewPage.svelte';

  export let data: { restaurants: RestaurantType[] };
</script>

<TitleBar title="All Restaurants" />
<ContentWrapper>
  <OverviewPage data={data.restaurants} />
</ContentWrapper>
