<script lang="ts">
  export let image: string = '';
</script>

<div class="image" style="background-image: url('{image}')" />

<style>
  .image {
    background-color: lightgray;
    width: 200px;
    height: 200px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    margin: 0 auto;
  }
</style>
