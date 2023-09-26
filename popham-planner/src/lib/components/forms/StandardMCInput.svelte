<script lang="ts">
  import StandardDropdown from './StandardDropdown.svelte';

  export let key: string;
  export let value: string[];
  export let title: string;
  export let categories: string[];
  export let strict: boolean;
  export let mainCategory: string | null = null;

  $: valueList = [...value];
  $: newValue = '';

  let addPending = false;

  function handleAddPending() {
    addPending = !addPending;
    if (addPending === true) {
      setTimeout(() => {
        document.getElementById('add-cat-input')!.focus();
      }, 100);
    }
  }

  function handleStrictChange() {
    let formattedValue = newValue
      .split(' ')
      .map(
        (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
    if (categories.includes(formattedValue)) {
      if (!valueList.includes(formattedValue)) {
        valueList = [...valueList, formattedValue];
        value = valueList;
      }
      newValue = '';
    }
  }

  function handleLaxChange() {
    if (!valueList.includes(newValue)) {
      valueList = [...valueList, newValue];
      value = valueList;
    }
    newValue = '';
  }

  function removeMCInput(input: string) {
    valueList = valueList.filter((el) => el !== input);
    value = valueList;
  }
</script>

{#if typeof mainCategory === 'string'}
  <StandardDropdown
    key="mainCategory"
    value={mainCategory}
    title={'Main Category'}
    categories={valueList}
  />
{/if}

<label for={key}
  >{title}
  <select name={key} multiple>
    {#each valueList as cat}
      <option value={cat} selected>{cat}</option>
    {/each}
  </select>
  <div id="cat-list">
    <div class="mc-element mc-input">
      {#if addPending}
        <form on:submit|preventDefault={handleLaxChange}>
          {key === 'tags' ? '#' : ''}<input
            id="add-cat-input"
            bind:value={newValue}
            name="addCat"
            on:input|preventDefault={strict ? handleStrictChange : () => {}}
          />
        </form>
      {/if}
      <button type="button" class="mc-element" on:click={handleAddPending}>
        {#if addPending}
          x
        {:else}
          +
        {/if}
      </button>
    </div>
    {#each valueList as cat}
      <div class="mc-element">
        {key === 'tags' ? '#' : ''}{cat}
        <button
          id={'delete-' + cat}
          type="button"
          class="mc-element"
          on:click={() => removeMCInput(cat)}
        >
          x
        </button>
      </div>
    {/each}
  </div>
</label>

<style>
  label {
    display: flex;
    justify-content: flex-start;
    align-items: top;
    font-size: large;
  }
  select {
    visibility: hidden;
    width: 10px;
  }
  #cat-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    gap: 5px;
  }
  .mc-element {
    height: 30px;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    background-color: mediumaquamarine;
    font-size: medium;
    display: flex;
    align-items: center;
  }
  .mc-input {
    height: 30px;
    padding: 4px;
  }
  input {
    width: 100px;
    font-size: small;
  }
  button {
    border: 0;
  }
</style>
