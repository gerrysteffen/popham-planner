<script lang="ts">
  import type { MealType, RestaurantType } from '$lib/UIdata/types';

  import CubeContainer from '$lib/components/overview/CubeContainer.svelte';
  import PreviewCube from '$lib/components/overview/PreviewCube.svelte';
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';

  export let data: MealType[] | RestaurantType[];
  export let title: string;
</script>

<TitleBar {title} />
<CubeContainer>
  {#each data as el}
    <PreviewCube data={el} />
  {/each}
</CubeContainer>
