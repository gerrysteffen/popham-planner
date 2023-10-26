<script lang="ts">
  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import CompleteForm from '../../../lib/components/forms/CompleteForm.svelte';

  import { foodCategories } from '$lib/utils/dropDowns';
  import { mealMock } from '$lib/utils/mockData';
</script>

<TitleBar title="Add a new Meal" />
<ContentWrapper>
  <CompleteForm
    type="meals"
    data={mealMock.emptyValues}
    mode="create"
    emptyValues={mealMock.emptyValues}
    titles={mealMock.titles}
    categories={foodCategories}
  />
</ContentWrapper>
