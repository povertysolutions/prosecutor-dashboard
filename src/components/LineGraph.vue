<template>
  <Line
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
import { Line } from 'vue-chartjs'
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

var timeFormat = 'DD/MM/YYYY';

export default {
  name: 'LineGraph',
  components: { Line },
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
    timelineMode: Boolean
  },
  computed:{
    chartData() {
      return {
        //labels : [ 'January', 'February', 'March' ],
        datasets : this.dataset
      }
    },
    chartOptions(){
      return{
        responsive: true,
        maintainAspectRatio: false,
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
                type: 'time',
                autoSkip: true,
                textStrokeWidth: 0,
                time: {
                  unit: 'year',
                  stepSize: 2,
                  //format: 'DD/MM/YYYY'
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
    xScale(){
      if (this.timelineMode){
        return {
            type: 'time',
            autoSkip: true,
            textStrokeWidth: 0,
            time: {
              unit: 'year',
              stepSize: 2,
              //format: 'DD/MM/YYYY'
            },
        }
      }
      return {
        type: 'linear'
      }
    }

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
