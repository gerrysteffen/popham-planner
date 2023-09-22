<script lang="ts">
  export let data= {
    _id: '',
    name: 'Loading...',
    image_url: '',
  };
  export let cat: string = '';
</script>

<a href={`${cat}/${data._id}`}>
  <div class="cube" style="background-image: url('{data.image_url}')">
    <div class="cube-text">
      <div class="text">
        {data.name}
      </div>
    </div>
    <div class="cube-text-background" />
  </div>
</a>

<style>
  a {
    text-decoration: none;
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
    background: #ffa06e;
    opacity: 0.8;
  }
</style>
