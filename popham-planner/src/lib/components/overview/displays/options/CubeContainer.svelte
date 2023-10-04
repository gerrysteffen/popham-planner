<div id="cube-container">
  <slot/>
</div>

<style>
  #cube-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    overflow: scroll;
  }
</style>