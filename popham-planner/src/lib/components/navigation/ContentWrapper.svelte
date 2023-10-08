<script lang="ts">
  export let padding: string = '20px';
</script>

<div class="content-wrapper" style='padding: {padding};'>
  <slot/>
</div>

<style>
  .content-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    padding: 20px;
  }
</style>