<template>
    <div class="filter">
      <div class="fieldGroup">
        <h4>Sort by</h4>
        <button v-for="(object, field) in dataset"
                :class="['field', currentField == field ? 'selected' : '']"
                @click="press(field)">
          <div :class="['circle', currentField == field ? 'selected' : '']"></div>
          {{ object.label }}

        </button>
      </div>

      <div class="dateGroup">
        <h4>Date Range</h4>
        <Datepicker range monthPicker autoApply
                    class="datepicker"
                    v-model="dateModel"
                    :presetRanges="dateRange"
                    placeholder="01/2000 - 01/2020"/>
      </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';

export default {
  props: {
    dataset: Object
  },
  data(){
    return{
      currentIndex: 0,
      currentField: "",
      dateModel: null,
      dateRange: []

    }
  },
  methods:{
    press(field){
      this.currentField = field;
      this.$emit('filterChanged', this.dataset[field]);
    }
  },
  watch:{
    dateModel(){
      //console.log(this.dateModel);
      this.$emit('dateChanged', this.dateModel)
      for (var i in this.dateModel){
        //console.log(this.dateModel[i]);
      }
    }
  },
  mounted(){
    this.dateModel = ref();
    // var startDate = new Date(Date.parse("01/2000"));
    // var endDate = new Date(Date.parse("01/2020"));
    // this.dateRange = [startDate, endDate];

    // this.dateRange = ref([
    //       { label: 'Today', range: [new Date(), new Date()] },
    //       { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
    //       {
    //         label: 'Last month',
    //         range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    //       },
    //       { label: 'This year', range: [startOfYear(new Date()), endOfYear(new Date())] },
    //     ]);

    console.log(this.dataset)
    this.currentField = Object.keys(this.dataset)[0];
    console.log("this.currentField: " + this.currentField);

  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.filter{

}

h4{
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
  width: 50%;
  //margin: 0 1rem;
}

.field{
  display: inline-block;
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
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

    &.selected{
      background-color: $color-green;
    }
  }
}



</style>
