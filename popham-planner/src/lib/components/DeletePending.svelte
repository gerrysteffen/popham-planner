<script lang="ts">
  import { enhance } from '$app/forms';
  export let deletePending: boolean;
  export let nextPage: string;
  import { goto } from '$app/navigation';

  function afterDelete() {
    console.log('delete happened');
    console.log(nextPage);
    return goto(nextPage);
  }
</script>

<div id="black-background" />
<div id="foreground">
  <div id="modal">
    <form method="POST" use:enhance>
      <button type="button" on:click={() => (deletePending = !deletePending)}
        >Cancel</button
      >
      <button type="submit" on:click={() => afterDelete()}>Confirm</button>
    </form>
  </div>
</div>

<style>
  #black-background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
  }
  #foreground {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #modal {
    width: 100px;
    height: 100px;
    background-color: #f7f7f7;
  }
</style>
