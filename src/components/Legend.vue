<template>
    <div class="legend">
      <h4>{{ title }}</h4>
      <ul class="itemGroups">
        <li v-for="(item, i) in dataset" class="item">
          <div class="circle" :style="{'background-color' : item.color}"></div>
          {{ item.label }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Legend",
  props: {
    title: String,
    dataset: Array
  },
  data(){
    return{
      currentIndex: 0,
      topics:
      [
        {
          "field" : "Black"
        },
        {
          "label" : "White"
        },
        {
          "label" : "Asian"
        },
        {
          "label" : "Hispanic"
        },
        {
          "label" : "Other"
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

.legend{

}


h4{
  margin-left: 30px;
}

.itemGroups{
  position: relative;
  margin-top: .5rem;
  margin-left: -.5rem;
}
.item{
  display: inline-block;
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  list-style: none;
  vertical-align: middle;

  .circle{
    display: inline-block;
    vertical-align: middle;
    background-color: $color-green;
    width: 1rem;
    height: 1rem;
  }
}

</style>
