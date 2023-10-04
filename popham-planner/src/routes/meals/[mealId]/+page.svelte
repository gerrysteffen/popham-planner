<script lang="ts">
  import type { MealType } from '$lib/UIdata/types';

  import IndividualPage from '$lib/components/indPage/IndividualPage.svelte';

  export let data: { meal: MealType };
</script>

<IndividualPage type="meal" data={data.meal} />
