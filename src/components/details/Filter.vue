<template>
    <div class="filter">
      <div class="fieldGroup">
        <h4>Sort by</h4>
        <button v-for="(object, key) in dataset"
                :class="['field', currentKey == key ? 'selected' : '']"
                @click="press(key)">
          <div :class="['circle', currentKey == key ? 'selected' : '']"></div>
          {{ object.label }}

        </button>
      </div>

      <div class="dateGroup">
        <h4>Date Range</h4>
        <!-- <Datepicker range monthPicker autoApply
                    class="datepicker"
                    v-model="dateModel"
                    :presetRanges="dateRange"
                    placeholder="01/2000 - 01/2020"/> -->
        <Calendar v-model="dateModel"
                  :key="calendarKey"
                  is-range
        />
      </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';
import Calendar from "./Calendar"

export default {
  name: "Filter",
  components: {
    Calendar
  },
  props: {
    dataset: Object
  },
  data(){
    return{
      currentKey: "",
      dateModel: null,
      calenderKey: 0,
    }
  },
  methods:{
    press(key){
      this.currentKey = key;
      this.$emit('filterChanged', this.dataset[key]);
    },
    resetCalendarModel() {
      this.dateModel.range.start = null  //or a date
      this.dateModel.range.end = null // or a date
      this.calendarKey++;
    },

    initialize(){
      var startDate = new Date(2017, 1, 1);
      var endDate = new Date(2020, 1, 1);

      this.dateModel = {start: startDate, end: endDate};
      this.currentKey =  Object.keys(this.dataset)[0];
    }
  },
  watch:{
    dateModel(date){
      //console.log(this.dateModel);
      this.$emit('dateChanged', date)
      for (var i in this.dateModel){
        //console.log(this.dateModel[i]);
      }
      //this.resetCalenderModel();
    },
    dataset(){
      if (this.dataset != null){
        this.currentKey = Object.keys(this.dataset)[0];
      }
    }
  },


  mounted(){
    // this.dateModel = ref();
    // this.currentKey = Object.keys(this.dataset)[0];
    // var startDate = new Date(Date.parse("01/2000"));
    // var endDate = new Date(Date.parse("01/2020"));

    // this.dateRange = ref([
    //       { label: 'Today', range: [new Date(), new Date()] },
    //       { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
    //       {
    //         label: 'Last month',
    //         range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    //       },
    //       { label: 'This year', range: [startOfYear(new Date()), endOfYear(new Date())] },
    //     ]);
    this.initialize();

    ////resests filter when flicking between details. feels too often
    // this.emitter.on("reset", (data) => {
    //     console.log("resetting filters")
    //     this.initialize();
    // });
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.filter{

}

h4{
  padding-bottom: .5rem;
  //padding: .5rem 0;
}

.fieldGroup{
  display: inline-block;
  vertical-align: top;
  width: 50%;
  //padding: 0 1rem;
  //margin: 0 1rem;
}

.dateGroup{
  display: inline-block;
  vertical-align: top;
  width: 40%;
  //margin: 0 1rem;
}

.field{
  display: inline-block;
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
  list-style: none;
  vertical-align: middle;

  &.selected{
    color: $color-black;
  }

  .circle{
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
    width: 1rem;
    height: 1rem;
    border-radius: 30px;
    border: 2px $color-green solid;
    margin-left: -10px;

    &.selected{
      background-color: $color-green;
    }
  }
}



</style>
