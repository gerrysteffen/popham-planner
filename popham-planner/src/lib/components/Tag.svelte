<script lang="ts">
  export let text: string;
  export let type: string;
  console.log(type);
</script>

<div
  class={type === 'main-category' ? 'main-tag' : 'tag'}
  style="background-color: {type === 'main-category'
    ? '#3F6C51'
    : type === 'category'
    ? '#26A96C'
    : '#B5DDA4'}"
>
  {type === 'main-category' ? text.toUpperCase() : text}
</div>

<style>
  .tag {
    height: 30px;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    font-size: medium;
    display: flex;
    align-items: center;
  }
  .main-tag {
    height: 40px;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    font-size: x-large;
    display: flex;
    align-items: center;
    color: white;
  }
</style>
