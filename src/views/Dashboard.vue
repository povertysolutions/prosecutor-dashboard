<template>
  <div class="view">
    <div class="module">
      <Sidebar></Sidebar>
        <section class="main">
          <h2>This is the dashboard.</h2>
          <LineGraph class="graph"></LineGraph>
          <Legend class="legend"></Legend>
          <Details class="details"></Details>
        </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import LineGraph from "@/components/LineGraph"
import Details from "@/components/Details"
import Legend from "@/components/Legend"

export default {
  name: "Dashboard",
  components: { Sidebar, LineGraph, Details, Legend }
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

h2{
  margin: 1rem 0;
}

.graph{
  display: inline-block;
  min-width: 300px;
  width: 75%;
  min-height: 200px;
  height: 40vh;
}

.legend{
  display: inline-block;
  width: 200px;
  vertical-align: top;
}

.details{
  min-width: 300px;
  width: 75%;
  min-height: 150px;
  height: 25vh;
  margin-top: 1em;
}

</style>
