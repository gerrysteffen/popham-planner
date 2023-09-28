<div id="cube-container">
  <slot/>
</div>

<style>
  #cube-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    padding: 0 10px;
    overflow: scroll;
  }
</style>