<script lang="ts">
  import type { RestaurantType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import CompleteForm from '$lib/components/forms/CompleteForm.svelte';

  import { restaurantCategories } from '$lib/UIdata/dropDowns';
  import { restaurantMock } from '$lib/UIdata/mockData';

  export let data: { restaurant: RestaurantType };
</script>

<TitleBar title="Edit Restaurant" />
<ContentWrapper>
  <CompleteForm
    type="restaurants"
    data={data.restaurant}
    mode="edit"
    emptyValues={restaurantMock.emptyValues}
    titles={restaurantMock.titles}
    categories={restaurantCategories}
  />
</ContentWrapper>
