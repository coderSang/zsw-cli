<template>
  <div class="my-map">
    <bd-map></bd-map>
    <use-location-prompt></use-location-prompt>
  </div>
</template>

<script>
  import BdMap from "./myMapChild/BdMap";
  import UseLocationPrompt from "./myMapChild/UseLocationPrompt";

  export default {
    name: "MyMap",
    components: {
      BdMap,
      UseLocationPrompt,
    }
  }
</script>

<style scoped>
  .my-map {
    height: 100%;
  }
</style>
