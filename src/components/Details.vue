<template>
    <div class="details">
      <div class="tabGroup">
        <button v-for="(section, i) in sections"
                :class="['tab', currentIndex == i ? 'selected' : '']"
                @click="press(i)">
          {{ section.title }}
        </button>
      </div>
      <div class="bg">
        <Filter class="filter"
                v-if="showFilter"
                :dataset="filters"
                @filterChanged="filterChanged"
                @dateChanged="dateChanged">
        </Filter>
        <p :class="[showFilter ? 'hidden' : '']">{{sections[currentIndex].body}}</p>
        <!-- <div class="test"></div> -->
      </div>
    </div>
</template>

<script>
import Filter from "@/components/Filter"
export default {
  name: "Details",
  components: { Filter },
  props: {
    filters: Object
  },
  data(){
    return{
      currentIndex: 3,
      sections:
      [
        {
          "title" : "Summary",
          "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title" : "Methods",
          "body" : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "title" : "Goals",
          "body" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
          "title" : "Filters",
          "body" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ]

    }
  },
  methods:{
    press(index){
      this.currentIndex = index;
    },

    filterChanged(data){
      this.$emit('filterChanged', data)
    },
    dateChanged(data){
      this.$emit('dateChanged', data)
    }
  },
  computed:{
    showFilter(){
      return this.currentIndex == this.sections.length - 1;

    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.details{

}

.tab{
  display: inline-block;
  background-color: $color-medium-grey;
  color: $color-white;
  margin: 0 2px;
  border-radius: $background-radius $background-radius 0 0;
  width: 24%;
  padding: 5px 0;

  &.selected{
    background-color: $color-light-grey;
    color: $color-black;
    font-weight: 600;
  }


  &:first-of-type{
    margin-left: 0;
  }
}

.bg{
  width: 100%;
  height: 100%;
  background-color: $color-light-grey;
  border-radius: 0 $background-radius $background-radius $background-radius;

  p{
    margin: 0;
    padding: 1rem;
    //border: 2px solid magenta;

    &.hidden{
      border: 2px solid magenta;
      opacity: 0;
    }
  }

  .filter{
    padding: 1rem;
  }
}




</style>
