<script lang="ts">
  import { colors } from '$lib/utils/cssColorSelectors';
</script>

<div id="sub-menu-container">
  <a id="meals-link" href="/meals">
    <div class="sub-menu-cube" style="background-color: {colors.meals.unselected};">
      <p>Meals</p>
      <p>&</p>
      <p>Recipes</p>
    </div>
  </a>
  <a id="restaurants-link" href="/restaurants">
    <div class="sub-menu-cube" style="background-color: {colors.restaurants.unselected};">
      <p>Restaurants</p>
      <p>&</p>
      <p>Take-Outs</p>
    </div>
  </a>
  <a id="planner-link" href="/planner?pw=-1&fw=1#week0">
    <div class="sub-menu-cube" style="background-color: {colors.planner.unselected};">
      <p>Plan</p>
      <p>Your</p>
      <p>Week!</p>
    </div>
  </a>
</div>

<style>
  #sub-menu-container {
    padding: 50px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
  .sub-menu-cube {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: x-large;
  }
  p {
    line-height: 1.5;
    margin: 0;
  }
</style>
