<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';
  import { mealMock } from '$lib/UIdata/mockData';
  import { foodCategories } from '$lib/UIdata/dropDowns';
  import StandardMcInput from '$lib/components/forms/StandardMCInput.svelte';

  const { emptyValues, titles } = mealMock;
  const dataArr = Object.entries(emptyValues);
</script>

<TitleBar title="Add a new Meal" />
<StandardForm>
  {#each dataArr as [key, value]}
    {#if typeof value === 'string'}
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
      {value}
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
  <StandardButton type="submit" text="Create" handleClick={() => {}} />
</StandardForm>
