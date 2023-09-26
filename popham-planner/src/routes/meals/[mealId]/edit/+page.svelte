<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';

  import type { MealType } from '$lib/UIdata/types';
  import { goto } from '$app/navigation';
  import { mealMock } from '$lib/UIdata/mockData';
  import StandardMcInput from '$lib/components/forms/StandardMCInput.svelte';
  import { foodCategories } from '$lib/UIdata/dropDowns';

  const { emptyValues, titles } = mealMock;
  export let data: { meal: MealType };

  const dataArr = Object.entries({
    ...emptyValues, // to make sure new fields are included aswell
    ...data.meal,
  });
</script>

<TitleBar title="Add a new Meal" />
<StandardForm>
  {#each dataArr as [key, value]}
    {#if typeof value === 'string' && titles[key]}
      <StandardTextInput {key} bind:value title={titles[key]} />
    {/if}
    {#if key === 'categories' && Array.isArray(value)}
      <StandardMcInput
        {key}
        bind:value
        title={titles[key]}
        categories={foodCategories}
        strict={true}
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
  <StandardButton type="submit" text="Confirm" handleClick={() => {}} />
  <StandardButton
    text="Cancel"
    type="button"
    handleClick={() => goto(`/meals/${data.meal._id}`)}
  />
</StandardForm>
