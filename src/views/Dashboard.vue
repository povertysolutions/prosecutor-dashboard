<template>
  <div class="view">
    <div class="module">
      <Sidebar></Sidebar>
        <section class="main">
          <h2>This is the dashboard.</h2>
          <LineGraph class="graph" :dataset="chartData"></LineGraph>
          <Legend class="legend" :dataset="legendData"></Legend>
          <!-- <Details class="details"></Details> -->
          <Filter class="filter"></Filter>
        </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import LineGraph from "@/components/LineGraph"
import Details from "@/components/Details"
import Legend from "@/components/Legend"
import Filter from "@/components/Filter"

import WarrentData from "../models.js"

export default {
  name: "Dashboard",
  components: { Sidebar, LineGraph, Details, Legend, Filter },
  data(){
    return {
      colors: ["#124E98", "#6979D3", "#FFA600", "#955196", "#DD5182" ],

      chartData: [],
      legendData: []
    }
  },
  mounted(){
    //this.tempData =  [ { data: [40, 20, 12] } ];

    var currentData = WarrentData.getDataBy("race");

    var chart = [];
    var legend = [];
    var index = 0;
    for (var type in currentData){
      console.log("type:" + type)
      console.log("type:" + currentData[type])
      chart.push( {"data" : currentData[type], "borderColor": this.colors[index]})
      legend.push({"label" : type, "color" : this.colors[index]})
      index++;
    }

    this.chartData = chart;
    this.legendData = legend;
  }
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

.filter{
  display: inline-block;
}

</style>
