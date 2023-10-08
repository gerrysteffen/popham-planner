<script lang="ts">
</script>

<div />

<style>
  div {
    position: absolute;
    top: -11px;
    height: 10px;
    left: 0;
    right: 0;
    background: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      /* rgba(255, 255, 255, 0.5) 30%, */ /* rgba(255, 255, 255, 1) 100% */
        rgba(255, 255, 255, 0.6) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(255, 255, 255, 0)),
      /* color-stop(30%, rgba(255, 255, 255, 0.5)), */
        /* color-stop(100%, rgb(255, 255, 255, 1)) */
        color-stop(100%, rgb(255, 255, 255, 0.6))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      /* rgba(255, 255, 255, 0.5) 30%, */ /* rgb(255, 255, 255, 1) 100% */
        rgb(255, 255, 255, 0.6) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      /* rgba(255, 255, 255, 0.5) 30%, */ /* rgba(255, 255, 255, 1) 100% */
        rgba(255, 255, 255, 0.6) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      /* rgba(255, 255, 255, 0.5) 30%, */ /* rgba(255, 255, 255, 1) 100% */
        rgba(255, 255, 255, 0.6) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      /* rgba(255, 255, 255, 0.5) 30%, */ /* rgba(255, 255, 255, 1) 100% */
        rgba(255, 255, 255, 0.6) 100%
    ); /* W3C */
  }
</style>
