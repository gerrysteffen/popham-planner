<script lang="ts">
  export let key: string; //TODO: propper typing
  export let value: string[]; //TODO: propper typing
  export let title: string; //TODO: propper typing
  export let categories: string[];

  $: valueList = [...value];
  $: newValue = '';

  function handleAdd() {
    if (categories.includes(newValue)) {
      if (!valueList.includes(newValue)) {
        valueList = [...valueList, newValue];
      }
      newValue = '';
    }
  }
</script>

<label for="key"
  >{title}
  <select name={key} multiple>
    {#each valueList as cat}
      <option value={cat} selected>{cat}</option>
    {/each}
  </select>
  {#each valueList as cat}
    <div>{cat}</div>
  {/each}
  Add categories: <input bind:value={newValue} name="addCat" />
  <button type="button" on:click={handleAdd}>Add category</button>
</label>

<style>
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: large;
  }
  select {
    visibility: hidden;
  }
</style>
