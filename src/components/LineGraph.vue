<template>
  <Component
    :is="barMode ? 'Bar' : 'Line'"
    class="lineChart"
    :chart-options="chartOptions"
    :chart-data="chartData"
    chart-id="line-chart"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :v-if="dataset !== []"
  />
</template>

<script>
import { Line, Bar } from 'vue-chartjs'
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

var timeFormat = 'DD/MM/YYYY';

export default {
  name: 'LineGraph',
  components: { Line, Bar },
  props: {
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    cssClasses: {
      default: '',
      type: String
    },
    dataset: Array,
    xLabel: String,
    yLabel: String,
    timelineMode: Boolean,
    barMode: Boolean
  },
  computed:{
    chartData() {
      return {
        //labels : [ 'January', 'February', 'March' ],
        datasets : this.dataset
      }
    },
    xScale(){
      if (this.timelineMode){
        return {
            type: 'time',
            autoSkip: true,
            textStrokeWidth: 0,
            labels: [],
            time: {
              unit: 'year',
              stepSize: 5,
              // parser: 'yyyy-mm-dd', //1992-11-29 00:00:00.0000000
              // displayFormats: {
              //   year: 'yyyy'
              // }
            },
        }
      }
      return {
        type: 'category',
        labels: []
      }
    },
    chartOptions(){
      return{
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            display: false
          }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: {
              //barPercentage: 1,
              //maxBarThickness: 100,
              type: 'time',
              //autoSkip: true,
              //textStrokeWidth: 0,
              labels: [],
              time: {
                //unit: 'year',
                //stepSize: 5,
                // parser: 'yyyy-mm-dd', //1992-11-29 00:00:00.0000000
                // displayFormats: {
                //   year: 'yyyy'
                // }
              },
            },
            x: {
                title: {
                    display: true,
                    text: this.xLabel,
                    font: {
                        size: 18,
                        family:'Roboto Medium'

                    },
                    color: "#000"
                },
                grid: {
                    drawBorder: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: this.yLabel,
                    padding: {
                      bottom: 15
                    },
                    font: {
                        size: 18,
                        family:'Roboto Medium'
                    },
                    color: "#000"
                }
            }
        }
      }
    },
  },
  data() {
    return {
      styles: {},
      plugins: {}
    }
  }
}
</script>

<style lang="scss" scoped>

.lineChart{

}
</style>
