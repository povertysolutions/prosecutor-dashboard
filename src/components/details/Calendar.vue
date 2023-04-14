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

const minDate = new Date(2017, 1, 1);
const maxDate = new Date(2020, 12, 31);

const startRange = ref({
  start: new Date(2017, 1, 1),
  end: new Date(2020, 12, 31)
});

const attributes = ref([
  {
    highlight: 'red',
    //dates: [{ start: minDate, end: maxDate }],
  },
]);


</script>
