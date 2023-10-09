<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import ContentWrapper from '$lib/components/navigation/ContentWrapper.svelte';
  import OverviewPage from '$lib/components/overview/OverviewPage.svelte';

  export let data: { meals: MealType[] };
</script>

<TitleBar title="All Meals & Recipes" />
<ContentWrapper>
  <OverviewPage data={data.meals} />
</ContentWrapper>
