<script lang="ts">
  import CompleteForm from '../../../lib/components/forms/CompleteForm.svelte';

  import { restaurantCategories } from '$lib/UIdata/dropDowns';
  import { restaurantMock } from '$lib/UIdata/mockData';
</script>

<CompleteForm
  type="restaurants"
  data={restaurantMock.emptyValues}
  mode="create"
  emptyValues={restaurantMock.emptyValues}
  titles={restaurantMock.titles}
  categories={restaurantCategories}
/>
