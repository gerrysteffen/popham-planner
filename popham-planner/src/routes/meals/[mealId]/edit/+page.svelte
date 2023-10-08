<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import CompleteForm from '../../../../lib/components/forms/CompleteForm.svelte';

  import { foodCategories } from '$lib/UIdata/dropDowns';
  import { mealMock } from '$lib/UIdata/mockData';

  export let data: { meal: MealType };
</script>

<TitleBar title="Edit Meal" />
<ContentWrapper>
  <CompleteForm
    type="meals"
    data={data.meal}
    mode="edit"
    emptyValues={mealMock.emptyValues}
    titles={mealMock.titles}
    categories={foodCategories}
  />
</ContentWrapper>
