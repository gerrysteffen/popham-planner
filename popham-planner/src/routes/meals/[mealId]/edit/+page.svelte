<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';
  import CompleteForm from '../../../../lib/components/forms/CompleteForm.svelte';

  import { foodCategories } from '$lib/UIdata/dropDowns';
  import { mealMock } from '$lib/UIdata/mockData';

  export let data: { meal: MealType };
</script>

<CompleteForm
  data={data.meal}
  mode="edit"
  emptyValues={mealMock.emptyValues}
  titles={mealMock.titles}
  categories={foodCategories}
/>
