<template>
  <div class="view">
    <div class="module">
      <Sidebar></Sidebar>
        <section class="main">
          <h2>This is the dashboard.</h2>
          <LineGraph class="graph" :dataset="chartData"></LineGraph>
          <Legend class="legend" :title="currentLegendTitle" :dataset="legendData"></Legend>
          <Details class="details" :filters="filters" @filterChanged="updateFilter" @dateChanged="updateDate"></Details>
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
      colors: ["#6979D3", "#FFA600", "#7b247d", "#33557d", "#f5e16e", "#DD5182", "#44279c", "#b670b8" ],
      filters:
      [
        {
          "label" : "Race",
          "field" : "race"
        },
        {
          "label" : "Location",
          "field" : "region"
        },
        {
          "label" : "Case Outcome",
          "field" : "outcome"
        },
        {
          "label" : "Charge Filed",
          "field" : "type"
        }
      ],
      chartData: [],
      legendData: [],
      currentFilter: null
    }
  },
  computed:{
    currentLegendTitle(){
      if (this.currentFilter && this.currentFilter.label){
        return this.currentFilter.label;
      }
      return "";
    }
  },
  methods:{
    updateFilter(filter){
      this.currentFilter = filter;
      this.sort();
    },
    updateDate(dateModel){
      if (dateModel && dateModel.length === 2){

        //console.log("updateDate: " + dateModel.length);
        if (dateModel[0] && dateModel[1]){
          var currentData = WarrentData.getByDate(dateModel);
          this.chartData = [];

          setTimeout(() => {
            var chart = [];
            var index = 0;
            for (var type in currentData){
              chart.push( {"data" : currentData[type], "borderColor": this.colors[index]})
              index++;
            }
            this.chartData = chart;
          }, 500);

        }

      }
    },
    sort(){
      var field = this.currentFilter.field;
      var currentData = WarrentData.getDataBy(field);

      var chart = [];
      var legend = [];
      var index = 0;
      for (var type in currentData){
        chart.push( {"data" : currentData[type], "borderColor": this.colors[index]})
        legend.push({"label" : type, "color" : this.colors[index]})
        index++;
      }

      this.chartData = chart;
      this.legendData = legend;
    }
  },
  mounted(){
    this.currentFilter = this.filters[0];
    this.sort();
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
  margin-top: 4rem;

}

h2{
  margin: 2rem 0;
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
