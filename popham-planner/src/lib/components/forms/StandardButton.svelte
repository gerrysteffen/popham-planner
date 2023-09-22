<script lang="ts">
  export let type: 'submit';
  export let text: string;
</script>

<input {type} value={text} />

<style>
  input {
    font-size: large;
  }
</style>
