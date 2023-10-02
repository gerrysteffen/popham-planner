<script lang="ts">
  export let time: 'lunch' | 'dinner';
</script>

<div class={time} />

<style>
  .lunch {
    width: 50%;
    height: 100%;
    border-right: 1px black solid;
  }
  .dinner {
    width: 50%;
    height: 100%;
  }
</style>
