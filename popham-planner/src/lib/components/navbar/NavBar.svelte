<script lang="ts">
  import FadeOut from './FadeOut.svelte';

  export let color: string;
</script>

<nav>
  <FadeOut />
  <div id="lower-color-block" style="box-shadow: 0 30px 0 0 {color}" />
  <div id="sub-cats" style="background-color: {color}">
    <slot name="sub-menus" />
  </div>
  <div id="main-cats">
    <slot name="main-menus" />
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
    background-color: transparent;
  }
  #lower-color-block {
    content: '';
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 40%;
    height: 60px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
  }
  #main-cats {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 40%;
  }
  #sub-cats {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 60%;
    padding: 10px;
    border-top-left-radius: 10px;
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
    #lower-color-block {
      bottom: 20px;
    }
    #sub-cats {
      padding-right: 20px;
      padding-bottom: 20px;
    }
  }
</style>
