<script lang="ts">
  import type { MealType } from '$lib/utils/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { meal: MealType };
</script>

<TitleBar title={data.meal.name} />
<ContentWrapper>
  <IndividualPage type="meal" data={data.meal} />
</ContentWrapper>
