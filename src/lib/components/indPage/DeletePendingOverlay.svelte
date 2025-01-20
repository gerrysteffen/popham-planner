<script lang="ts">
  import { enhance } from '$app/forms';
  import Spinner from '../basicUI/Spinner.svelte';
  import StandardButton from '../forms/StandardButton.svelte';
  export let deletePending: boolean;

  let loading = false;
  function loadingScreenOn() {
    loading = true;
  }
</script>

<div id="black-background" />
<div id="foreground">
  <div id="modal">
    <p>Are you sure you want to delete this record?</p>
    <form method="POST" action="?/delete" use:enhance>
      <StandardButton
        id="delete-cancel"
        type="reset"
        text="Cancel"
        handleClick={() => (deletePending = !deletePending)}
      />
      <StandardButton
        type="submit"
        id="delete-confirm"
        text="Confirm"
        handleClick={loadingScreenOn}
      />
    </form>
  </div>
</div>
{#if loading}
  <Spinner top="0" />
{/if}

<style>
  #black-background {
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
  #foreground {
    z-index: 41;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #modal {
    width: 250px;
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
  }
  p {
    text-align: center;
    font-size: large;
    margin-top: 0;
  }
  form {
    display: flex;
    margin-top: 20px;
    gap: 20px;
  }
</style>
