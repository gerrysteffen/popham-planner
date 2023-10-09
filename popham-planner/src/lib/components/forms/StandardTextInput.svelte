<script lang="ts">
  export let key: string; //TODO: propper typing
  export let value: string; //TODO: propper typing
  export let title: string; //TODO: propper typing
</script>

<label for={key}>{title} <input bind:value name={key} id={key}/></label>

<style>
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: large;
    height: 30px;
  }
  input {
    width: 50%;
    font-size: large;
  }
</style>
