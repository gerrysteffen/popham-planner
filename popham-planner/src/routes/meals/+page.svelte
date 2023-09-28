<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';

  import OverviewPage from '$lib/components/overview/OverviewPage.svelte';

  export let data: { meals: MealType[] };

  const title = 'All Meals & Recipes';
</script>

<OverviewPage {title} data={data.meals} />
