<script lang="ts">
  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import CompleteForm from '../../../lib/components/forms/CompleteForm.svelte';

  import { restaurantCategories } from '$lib/UIdata/dropDowns';
  import { restaurantMock } from '$lib/UIdata/mockData';
</script>

<TitleBar title="Add a new Restaurant" />
<ContentWrapper>
  <CompleteForm
    type="restaurants"
    data={restaurantMock.emptyValues}
    mode="create"
    emptyValues={restaurantMock.emptyValues}
    titles={restaurantMock.titles}
    categories={restaurantCategories}
  />
</ContentWrapper>
