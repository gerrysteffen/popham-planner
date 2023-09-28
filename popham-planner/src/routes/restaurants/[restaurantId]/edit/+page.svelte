<script lang="ts">
  import type { RestaurantType } from '$lib/UIdata/types';
  import CompleteForm from '../../../../lib/components/forms/CompleteForm.svelte';

  import { restaurantCategories } from '$lib/UIdata/dropDowns';
  import { restaurantMock } from '$lib/UIdata/mockData';

  export let data: { restaurant: RestaurantType };
</script>

<CompleteForm
  type="restaurants"
  data={data.restaurant}
  mode="edit"
  emptyValues={restaurantMock.emptyValues}
  titles={restaurantMock.titles}
  categories={restaurantCategories}
/>
