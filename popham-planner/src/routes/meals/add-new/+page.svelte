<script lang="ts">
  import CompleteForm from '../../../lib/components/forms/CompleteForm.svelte';

  import { foodCategories } from '$lib/UIdata/dropDowns';
  import { mealMock } from '$lib/UIdata/mockData';
</script>

<CompleteForm
  data={mealMock.emptyValues}
  mode="create"
  emptyValues={mealMock.emptyValues}
  titles={mealMock.titles}
  categories={foodCategories}
/>
