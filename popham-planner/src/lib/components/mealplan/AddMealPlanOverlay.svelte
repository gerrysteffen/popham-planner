<script lang="ts">
  import { enhance } from '$app/forms';
  import ButtonOneLineWrapper from '../forms/ButtonOneLineWrapper.svelte';
  import StandardButton from '../forms/StandardButton.svelte';

  const now = new Date();
  const date = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(
    -2
  )}-${('0' + now.getDate()).slice(-2)}T${('0' + now.getHours()).slice(-2)}:${(
    '0' + now.getMinutes()
  ).slice(-2)}`;
  export let addMealPlanPending: boolean;
  export let id: string;
  export let planType: 'restaurant' | 'meal';
</script>

<div id="black-background" />
<div id="foreground">
  <div id="modal">
    <p>Add a Plan</p>
    <form method="POST" action="?/addMealPlan">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="planType" value={planType} />
      <label for="date">
        Date
        <input name="date" value={date} type="datetime-local" />
      </label>
      <label for="Breakfast"
        >Breakfast
        <input name="mealType" value="Breakfast" type="radio" />
      </label>
      <label for="Brunch"
        >Brunch
        <input name="mealType" value="Brunch" type="radio" />
      </label>
      <label for="Lunch"
        >Lunch
        <input name="mealType" value="Lunch" type="radio" />
      </label>
      <label for="Dinner"
        >Dinner
        <input name="mealType" value="Dinner" type="radio" checked />
      </label>
      <ButtonOneLineWrapper>
        <StandardButton
          type="reset"
          text="Cancel"
          handleClick={() => (addMealPlanPending = !addMealPlanPending)}
        />
        <StandardButton
          type="submit"
          text="Confirm"
          handleClick={() => {}}
        />
      </ButtonOneLineWrapper>
    </form>
  </div>
</div>

<style>
  #black-background {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
  #foreground {
    z-index: 101;
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
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
  }
</style>
