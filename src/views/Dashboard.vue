<template>
  <div class="view">
    <div class="module">
      <Sidebar :topics="topics" @topicChanged="updateTopic"></Sidebar>
        <section class="main">
          <h2>{{currentTitle}}</h2>
          <LineGraph class="graph" :dataset="chartData" :yLabel="currentYLabel"></LineGraph>
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

import WarrentData from "../models.js"
import topicsJson from "../../assets/topics.json"
import filterJson from "../../assets/data/warrant-filters.json"

export default {
  name: "Dashboard",
  components: { Sidebar, LineGraph, Details, Legend },
  data(){
    return {
      colors: ["#6979D3", "#FFA600", "#7b247d", "#33557d", "#f5e16e", "#DD5182", "#44279c", "#b670b8" ],
      chartData: [],
      legendData: [],
      currentFilter: null,
      currentTopic: null,
      topics: topicsJson,
      filters: null,
      lang: "en"
    }
  },
  computed:{
    currentLegendTitle(){
      if (this.currentFilter && this.currentFilter.label){
        return this.currentFilter.label;
      }
      return "";
    },
    currentTitle(){
      if (this.currentFilter && this.currentFilter.title){
        return this.currentFilter.title;
      }
      return "";
    },
    currentYLabel(){
      if (this.currentFilter && this.currentFilter.yLabel){
        return this.currentFilter.yLabel[this.lang];
      }
      return "";
    }
  },
  methods:{
    updateTopic(topic){
      this.currentTopic = topic;
      this.loadFilters();
      this.sort();
    },
    loadFilters(){
      this.filters = WarrentData.loadFilterModel(this.currentTopic);
      var currentFilterKey = Object.keys(this.filters)[0]
      this.currentFilter = this.filters[currentFilterKey];
    },
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
      var dataFile = this.currentTopic.data;

      var field = this.currentFilter.y;
      var currentData = WarrentData.getDataBy(dataFile, field);

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
    var firstTopic = Object.keys(this.topics)[0]
    this.currentTopic = this.topics[firstTopic];
    this.loadFilters();
    this.sort();
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.main{
  margin-left: 14rem;
  margin-top: 4rem;
}

h2{
  margin: 1.5rem 0 2rem 4rem;
  display: inline-block;

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
  width: 150px;
  vertical-align: top;
  padding-left: 2rem;
}

.details{
  min-width: 300px;
  width: 75%;
  min-height: 150px;
  height: 25vh;
  margin-top: 2rem;
  padding-bottom: 9.5rem;
  padding-left: 2rem;
}

</style>
