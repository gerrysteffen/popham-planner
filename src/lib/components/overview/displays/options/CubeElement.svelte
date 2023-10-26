<script lang="ts">
  import { page } from '$app/stores';
  import { colors } from '$lib/utils/cssColorSelectors';

  export let data = {
    _id: '',
    name: 'Loading...',
    image_url: ''
  };

  $: category = $page.url.pathname.split('/')[1] as string;
</script>

<a href={`${category}/${data._id}`}>
  <div
    class="cube"
    style="background-color: {colors[category].selected}; background-image: url('{data.image_url}')"
  >
    <div class="cube-text">
      <div class="text">
        {data.name}
      </div>
    </div>
    <div class="cube-text-background" style="background-color: {colors[category].unselected}" />
  </div>
</a>

<style>
  a {
    text-decoration: none;
    width: 150px;
  }
  .cube {
    background-color: #ff7f50;
    width: 150px;
    height: 150px;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
  }
  .cube-text {
    height: 50px;
    color: black;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: medium;
    font-weight: bold;
    text-align: center;
    line-height: 1.25;
  }
  .cube-text-background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    opacity: 0.8;
  }
</style>
