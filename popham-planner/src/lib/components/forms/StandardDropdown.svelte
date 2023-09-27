<script lang="ts">
  export let key: string;
  export let value: string;
  export let title: string;
  export let categories: string[];

  $: valueList = [...categories];
</script>

<label for={key}>
  <div class="label">
    {title}
  </div>
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
    justify-content: space-between;
    align-items: stretch;
    font-size: large;
    height: 30px;
  }
  select {
    width: 50%;
    font-size: large;
  }
  .label {
    height: 30px;
    display: flex;
    justify-items: center;
    align-items: center;
  }
</style>
