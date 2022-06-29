<template>
    <div class="filter">
      <h3>Filters</h3>
      <div class="fieldGroup">
        <button v-for="(field, i) in fields"
                :class="['field', currentIndex == i ? 'selected' : '']"
                @click="press(i)">
          <div :class="['circle', currentIndex == i ? 'selected' : '']"></div>
          {{ field.label }}

        </button>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return{
      currentIndex: 0,
      fields:
      [
        {
          "label" : "Race"
        },
        {
          "label" : "Location"
        },
        {
          "label" : "Case Outcome"
        },
        {
          "label" : "Charge Filed"
        }
      ]

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

.filter{

}

h3{
  margin: 1rem;
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
