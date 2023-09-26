<script lang="ts">
  export let key: string;
  export let value: string;
  export let title: string;
  export let categories: string[];

  $: valueList = [...categories];
</script>

<label for={key}
  >{title}
  <select name={key}>
    {#if !valueList.length}
      <option value={''} selected>No categories available</option>
    {/if}
    {#each valueList as cat}
      <option value={cat} selected={value === cat}>{cat}</option>
    {/each}
  </select>
</label>

<style>
  label {
    display: flex;
    justify-content: flex-start;
    align-items: top;
    font-size: large;
  }
</style>
