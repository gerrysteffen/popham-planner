<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';
  import { goto } from '$app/navigation';
  import type { RestaurantType } from '$lib/UIdata/types';
  import { restaurantMock } from '$lib/UIdata/mockData';

  const { emptyValues, titles } = restaurantMock;
  export let data: { restaurant: RestaurantType };

  const dataArr = Object.entries({
    ...emptyValues, // to make sure new fields are included aswell
    ...data.restaurant,
  });
</script>

<TitleBar title="Edit Restaurant" />
<StandardForm>
  {#each dataArr as [key, value]}
    {#if typeof value === 'string' && titles[key]}
      <StandardTextInput {key} bind:value title={titles[key]} />
    {/if}
  {/each}
  <StandardButton type="submit" text="Confirm" handleClick={() => {}} />
  <StandardButton
    text="Cancel"
    type="button"
    handleClick={() => goto(`/restaurants/${data.restaurant._id}`)}
  />
</StandardForm>
