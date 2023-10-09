<script lang="ts">
  export let title: string = ''
</script>

<div id='title-wrapper'>
  <h1>
    {title}
  </h1>
</div>

<style>
  #title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #dcdcdc;
    border-bottom: #bebebe solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 21;
  }
  h1 {
    text-align: center;
    font-size: x-large;
    margin: 0;
  }
</style>
