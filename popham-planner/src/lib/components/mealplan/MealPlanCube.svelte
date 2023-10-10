<script lang="ts">
  import { page } from "$app/stores";
  import { colors } from "$lib/UIdata/cssSelectors";
  import type { MealPlanType } from "$lib/UIdata/types";

  export let data: MealPlanType

  $: category = $page.url.pathname.split('/')[1] as string;
</script>

<a href={`planner/${data._id}`}>
  <div class="cube" style="background-color: {colors[category].selected}; background-image: url('{data[data.planType]?.image_url}')">
    <div class="cube-text-background" style="background-color: {colors[category].unselected}"/>
    <div class="cube-text">
      <div class="text">
        {data[data.planType]?.name}
      </div>
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    width: 100px;
  }
  .cube {
    background-color: #ff7f50;
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
  }
  .cube-text {
    height: 40px;
    color: black;
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: small;
    font-weight: bold;
    text-align: center;
    line-height: 1.25;
  }
  .cube-text-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    opacity: 0.8;
  }
</style>
