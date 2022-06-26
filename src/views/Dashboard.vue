<template>
  <div class="view">
    <div class="module">
      <h1>This is the dashboard.</h1>
      <LineGraph></LineGraph>
      <Details class="details"></Details>
    </div>
  </div>
</template>

<script>
import LineGraph from "@/components/LineGraph"
import Details from "@/components/Details"

export default {
  name: "Dashboard",
  components: { LineGraph, Details }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.module{

  margin: 0 2rem;
  //border: blue 2px solid;
}
.details{
  min-width: 300px;
  width: 100%;
  min-height: 150px;
  height: 25vh;
  margin-top: 1em;
}

</style>
