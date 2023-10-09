<script lang="ts">
  import { fly } from 'svelte/transition';
  
  export let color: { selected: string; unselected: string };
</script>

<div
  id="sub-cat-options"
  style="background-color: {color.selected}; border-top: {color.unselected} 1px solid; border-left: {color.unselected} 1px solid;"
  transition:fly={{ y: 70, duration: 500, opacity: 1 }}
>
  <slot />
</div>
<div
  id="lower-color-block"
  style="box-shadow: 0 30px 0 0 {color.selected}; border-right: {color.unselected} 1px solid; border-bottom: {color.unselected} 1px solid;"
  transition:fly={{ y: 70, duration: 500, opacity: 1 }}
/>

<style>
  #lower-color-block {
    content: '';
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 40%;
    height: 45px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
    box-sizing: content-box;
  }
  #sub-cat-options {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 60%;
    padding: 10px;
    border-top-left-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
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
    #lower-color-block {
      bottom: 20px;
    }
    #sub-cat-options {
      padding-right: 20px;
      padding-bottom: 20px;
    }
  }
</style>
