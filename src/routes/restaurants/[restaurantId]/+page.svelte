<script lang="ts">
  import type { RestaurantType } from '$lib/utils/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { restaurant: RestaurantType };
</script>

<TitleBar title={data.restaurant.name} />
<ContentWrapper>
  <IndividualPage type="restaurant" data={data.restaurant} />
</ContentWrapper>
