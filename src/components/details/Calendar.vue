<template>
  <v-date-picker
      range
      v-model="dates"
      :minDate="minDate" :maxDate="maxDate"
      :attributes="attributes">
  </v-date-picker>
</template>

<script setup>

// :minDate="minDate" :maxDate="maxDate"
// :disabledDates="[]"
// :available-dates="[{start: minDate, end: maxDate}]"


import { ref } from 'vue';

const minDate = new Date(2017, 0, 0);
const maxDate = new Date(2020, 0, 0);

const startRange = ref({
  start: new Date(2017, 0, 0),
  end: new Date(2020, 0, 0)
});

const attributes = ref([
  {
    highlight: 'red',
    //dates: [{ start: minDate, end: maxDate }],
  },
]);


</script>
