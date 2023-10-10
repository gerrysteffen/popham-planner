<script lang="ts">
  export let top: string = '50px';
</script>

<div id="spinner-container" style="top: {top};">
  <div class="spinner">
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
    <div class="bar4" />
    <div class="bar5" />
    <div class="bar6" />
    <div class="bar7" />
    <div class="bar8" />
    <div class="bar9" />
    <div class="bar10" />
    <div class="bar11" />
    <div class="bar12" />
  </div>
</div>

<style>
  #spinner-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }

  div.spinner {
    position: relative;
    width: 70px;
    height: 70px;
    display: inline-block;
    background: #f7f7f7;
    padding: 10px;
    border-radius: 10px;
  }

  div.spinner div {
    width: 6%;
    height: 16%;
    background: #bebebe;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    -webkit-border-radius: 50px;
    -webkit-animation: fade 1s linear infinite;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  div.spinner div.bar1 {
    -webkit-transform: rotate(0deg) translate(0, -130%);
    -webkit-animation-delay: 0s;
  }

  div.spinner div.bar2 {
    -webkit-transform: rotate(30deg) translate(0, -130%);
    -webkit-animation-delay: -0.9167s;
  }

  div.spinner div.bar3 {
    -webkit-transform: rotate(60deg) translate(0, -130%);
    -webkit-animation-delay: -0.833s;
  }
  div.spinner div.bar4 {
    -webkit-transform: rotate(90deg) translate(0, -130%);
    -webkit-animation-delay: -0.7497s;
  }
  div.spinner div.bar5 {
    -webkit-transform: rotate(120deg) translate(0, -130%);
    -webkit-animation-delay: -0.667s;
  }
  div.spinner div.bar6 {
    -webkit-transform: rotate(150deg) translate(0, -130%);
    -webkit-animation-delay: -0.5837s;
  }
  div.spinner div.bar7 {
    -webkit-transform: rotate(180deg) translate(0, -130%);
    -webkit-animation-delay: -0.5s;
  }
  div.spinner div.bar8 {
    -webkit-transform: rotate(210deg) translate(0, -130%);
    -webkit-animation-delay: -0.4167s;
  }
  div.spinner div.bar9 {
    -webkit-transform: rotate(240deg) translate(0, -130%);
    -webkit-animation-delay: -0.333s;
  }
  div.spinner div.bar10 {
    -webkit-transform: rotate(270deg) translate(0, -130%);
    -webkit-animation-delay: -0.2497s;
  }
  div.spinner div.bar11 {
    -webkit-transform: rotate(300deg) translate(0, -130%);
    -webkit-animation-delay: -0.167s;
  }
  div.spinner div.bar12 {
    -webkit-transform: rotate(330deg) translate(0, -130%);
    -webkit-animation-delay: -0.0833s;
  }
</style>
