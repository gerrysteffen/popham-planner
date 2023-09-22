<script lang="ts">
  export let height: string;
</script>

<nav style:height>
  <slot />
</nav>

<style>
  nav {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
  }
</style>
