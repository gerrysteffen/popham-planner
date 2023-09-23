<script lang="ts">
  export let type: 'submit' | 'reset' | 'button';
  export let text: string;
  export let handleClick: () => void;
</script>

<input {type} value={text} on:click={handleClick} />

<style>
  input {
    font-size: large;
    width: 100%;
  }
</style>
