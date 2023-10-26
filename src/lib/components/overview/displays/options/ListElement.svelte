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
  <div class="item" style="background-color: {colors[category].unselected}">
    <div class="text">
      {data.name}
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }
  .item {
    background-color: #ff7f50;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: black;
    padding: 10px;
  }
  .text {
    width: 100%;
    font-size: large;
    text-align: left;
    line-height: 1.25;
  }
</style>
