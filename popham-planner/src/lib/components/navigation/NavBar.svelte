<script lang="ts">
  import FadeOut from './FadeOut.svelte';
</script>

<nav>
  <!-- <FadeOut /> -->
  <div id="nav-contents">
    <slot />
  </div>
</nav>

<style>
  nav {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    z-index: 40;
    background-color: #dcdcdc;
    padding-top: 5px;
    border-top: #bebebe solid 1px;
  }

  #nav-contents {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* Covering all the iphone screen sizes to add padding at the bottom */
  @media only screen and (device-height: 812px),
    (device-height: 844px),
    (device-height: 852px),
    (device-height: 896px),
    (device-height: 926px),
    (device-height: 932px) and (device-width: 375px),
    (device-width: 390px),
    (device-width: 393px),
    (device-width: 414px),
    (device-width: 428px),
    (device-width: 430px) and (-webkit-device-pixel-ratio: 3) {
    nav {
      height: 80px;
    }
  }
</style>
