<script lang="ts">
  import { enhance } from '$app/forms';
  import StandardButton from './forms/StandardButton.svelte';
  export let deletePending: boolean;
</script>

<div id="black-background" />
<div id="foreground">
  <div id="modal">
    <p>Are you sure you want to delete this record?</p>
    <form method="POST" use:enhance>
      <StandardButton
        type="reset"
        text="Cancel"
        handleClick={() => (deletePending = !deletePending)}
      />
      <StandardButton type="submit" text="Confirm" handleClick={() => {}} />
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
    width: 100vw;
    height: 100vh;
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
