<script lang="ts">
  export let level: number;
</script>

<nav class:base-nav={level === 0}>
  <slot />
</nav>

<style>
  nav {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    z-index: 40;
  }
  nav.base-nav {
    height: 80px;
  }
  @media only screen and (max-device-height: 667px) {
    nav.base-nav {
      height: 70px;
    }
  }
</style>
