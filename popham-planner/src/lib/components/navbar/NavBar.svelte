<script lang="ts">
</script>

<nav>
  <slot />
</nav>

<style>
  nav {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80px;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    z-index: 40;
  }
  @media only screen and (max-device-height: 667px) {
    nav {
      height: 70px;
    }
  }
</style>
