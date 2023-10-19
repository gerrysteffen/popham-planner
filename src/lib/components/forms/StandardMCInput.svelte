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

  $: optionlist = categories.filter((cat) => cat.toLowerCase().includes(newValue.toLowerCase()));

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
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
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

  function handleOptionSelect(option: string){
    newValue=option; 
    handleStrictChange();
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

<label for={key}>
  <div class="label">{title}</div>
  <div id="cat-list">
    <div class="mc-element mc-input">
      {#if addPending}
        <form id="cat-form" on:submit|preventDefault={handleLaxChange}>
          {key === 'tags' ? '#' : ''}<input
            id="add-cat-input"
            bind:value={newValue}
            name="addCat"
            on:input|preventDefault={strict ? handleStrictChange : () => {}}
          />
          {#if newValue.length > 0}
          <div id="options-list">
            {#each optionlist as option}
              <button name={option} type='button' class="option" on:click={()=>handleOptionSelect(option)}>{option}</button>
            {/each}
          </div>
          {/if}
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

<select name={key} multiple>
  {#each valueList as cat}
    <option value={cat} selected>{cat}</option>
  {/each}
</select>

<style>
  label {
    display: flex;
    justify-content: space-between;
    align-items: top;
    font-size: large;
  }
  select {
    visibility: hidden;
    height: 0px;
    width: 0px;
    margin: -5px;
  }
  #cat-list {
    width: 60%;
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
    width: 70px;
    font-size: small;
  }
  button {
    border: 0;
  }
  .label {
    height: 30px;
    width: 40%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  #cat-form {
    position: relative;
  }
  #options-list {
    position: absolute;
    bottom: -120px;
    height: 120px;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: scroll;
  }
  .option {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: small;
    background-color: white;
    border-bottom: gray 1px solid;
    text-align: left;
  }
</style>
