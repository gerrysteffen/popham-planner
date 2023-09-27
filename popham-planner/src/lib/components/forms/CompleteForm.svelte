<script lang="ts">
  import type { MealType, RestaurantType, Titles } from '$lib/UIdata/types';

  import { goto } from '$app/navigation';

  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';
  import StandardMcInput from '$lib/components/forms/StandardMCInput.svelte';

  export let type: 'meals' | 'restaurants';
  export let data: MealType | RestaurantType;
  export let mode: 'edit' | 'create';
  export let emptyValues: MealType | RestaurantType;
  export let titles: Titles;
  export let categories: string[];

  const dataArr =
    mode === 'create'
      ? Object.entries({
          ...data,
        })
      : Object.entries({
          ...emptyValues, // to make sure new fields are included aswell
          ...data,
        });
</script>

<TitleBar
  title={mode === 'create'
    ? `Add a new ${type === 'meals' ? 'Meal' : 'Restaurant'}`
    : `Edit ${type === 'meals' ? 'Meal' : 'Restaurant'}`}
/>
<StandardForm>
  {#each dataArr as [key, value]}
    {#if typeof value === 'string' && key !== 'mainCategory' && titles[key]}
      <StandardTextInput {key} bind:value title={titles[key]} />
    {/if}
    {#if key === 'categories' && Array.isArray(value)}
      <StandardMcInput
        {key}
        bind:value
        title={titles[key]}
        {categories}
        strict={true}
        mainCategory={''}
      />
    {/if}
    {#if key === 'tags' && Array.isArray(value)}
      <StandardMcInput
        {key}
        bind:value
        title={titles[key]}
        categories={['hello']}
        strict={false}
      />
    {/if}
  {/each}
  {#if mode === 'create'}
    <StandardButton type="submit" text="Create" handleClick={() => {}} />
  {:else if mode === 'edit'}
    <StandardButton type="submit" text="Confirm" handleClick={() => {}} />
    <StandardButton
      text="Cancel"
      type="button"
      handleClick={() => goto(`/${type}/${data._id}`)}
    />
  {/if}
</StandardForm>
