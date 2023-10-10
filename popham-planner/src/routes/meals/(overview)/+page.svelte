<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';

  import TitleBar from '$lib/components/navigation/TitleBar.svelte';
  import OverviewPage from '$lib/components/overview/OverviewPage.svelte';

  export let data: { meals: MealType[] };
</script>

<TitleBar title="All Meals & Recipes" />
<OverviewPage data={data.meals} type='meal'/>
