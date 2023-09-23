<script lang="ts">
  import TitleBar from '$lib/components/basicUI/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';

  import type { MealType, MealTypeForm } from '$lib/db/meals';
  import { goto } from '$app/navigation';

  export let data: { meal: MealType };

  const example: MealTypeForm = {
    name: '',
    description: '',
    image_url: '',
    tags: [],
    mainCategory: '',
    categories: [],
  };

  const dataArr = Object.entries(data.meal);

  const titles: {
    [key: string]: string;
  } = {
    name: 'Name',
    description: 'Description',
    image_url: 'Image Link (optional)',
    tags: 'Tags',
    mainCategory: 'Main Category',
    categories: 'Categories',
  };
</script>

<TitleBar title="Add a new Meal" />
<StandardForm>
  {#each dataArr as [key, value]}
    {#if typeof value === 'string' && titles[key]}
      <StandardTextInput {key} bind:value title={titles[key]} />
    {/if}
  {/each}
  <StandardButton type="submit" text="Confirm" handleClick={() => {}} />
    <StandardButton text='Cancel' type='button' handleClick={() => goto(`/meals/${data.meal._id}`)} />
</StandardForm>
