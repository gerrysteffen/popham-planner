<script lang="ts">
  import type { RestaurantType } from '$lib/UIdata/types';

  import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { restaurant: RestaurantType };
</script>

<IndividualPage type='restaurants' data={data.restaurant} />
