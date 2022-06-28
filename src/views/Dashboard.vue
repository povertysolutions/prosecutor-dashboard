<template>
  <div class="view">
    <div class="module">
      <Sidebar></Sidebar>
        <section class="main">
          <h1>This is the dashboard.</h1>
          <LineGraph></LineGraph>
          <Details class="details"></Details>
        </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import LineGraph from "@/components/LineGraph"
import Details from "@/components/Details"

export default {
  name: "Dashboard",
  components: { Sidebar, LineGraph, Details }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.module{
  //margin: 0 2rem;
  //padding: 1rem;
  //border: blue 2px solid;
}

.main{
  margin-left: 14rem;
  position: absolute;
}
.details{
  min-width: 300px;
  width: 100%;
  min-height: 150px;
  height: 25vh;
  margin-top: 1em;
}

</style>
