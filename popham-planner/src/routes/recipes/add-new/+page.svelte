<script lang="ts">
  import TitleBar from '$lib/components/TitleBar.svelte';
  import StandardForm from '$lib/components/forms/StandardForm.svelte';
  import StandardButton from '$lib/components/forms/StandardButton.svelte';
  import StandardTextInput from '$lib/components/forms/StandardTextInput.svelte';

  import type { TRecipeForm } from '$lib/db/recipes';

  const example: TRecipeForm = {
    name: '',
    description: '',
    image_url: '',
    tags: [],
    mainCategory: '',
    categories: [],
  };

  const data = Object.entries(example);

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

<TitleBar title="Add a new Recipe" />
<StandardForm>
  {#each data as [key, value]}
    {#if typeof value === 'string'}
      <StandardTextInput {key} bind:value title={titles[key]} />
    {/if}
  {/each}
  <StandardButton type="submit" text="Create" handleClick={() => {}} />
</StandardForm>
