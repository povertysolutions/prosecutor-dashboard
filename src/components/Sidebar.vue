<template>
    <div class="sidebar">
      <h3>Filters</h3>
      <div class="filterGroups">
        <button v-for="(filter, i) in filters"
                :class="['filter', currentIndex == i ? 'selected' : '']"
                @click="press(i)">
          {{ filter.label }}
          <div :class="['circle', currentIndex == i ? 'selected' : '']"></div>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    filters: Object
  },
  data(){
    return{
      currentIndex: "race"
    }
  },
  methods:{
    press(index){
      this.currentIndex = index;
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.sidebar{
  float: left;
  width: 12rem;
  height: 100vh;
  background-color: $color-black;
}

h3{
  color: $color-white;
  margin: 1rem;
  margin-top: 2rem;
}
.filter{
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  //font-size: 1.1rem;
  &.selected {
    background-color: #ffffff33;
    color: $color-white;
    font-weight: 600;
  }
}

</style>
