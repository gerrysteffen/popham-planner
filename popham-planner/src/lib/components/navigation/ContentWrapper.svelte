<script lang="ts">
  export let padding: string = '20px';
  export let overflow: string = 'scroll'
</script>

<div class="content-wrapper" style="padding: {padding}; overflow: {overflow};">
  <slot />
</div>

<style>
  .content-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .content-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
</style>
