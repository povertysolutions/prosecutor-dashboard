<template>
    <div class="filter">
      <div class="fieldGroup">
        <h4>Sort by</h4>
        <button v-for="(field, i) in dataset"
                :class="['field', currentIndex == i ? 'selected' : '']"
                @click="press(i)">
          <div :class="['circle', currentIndex == i ? 'selected' : '']"></div>
          {{ field.label }}

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
    dataset: Array
  },
  data(){
    return{
      currentIndex: 0,
      dateModel: null,
      dateRange: []

    }
  },
  methods:{
    press(index){
      this.currentIndex = index;
      this.$emit('filterChanged', this.dataset[index]);
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
