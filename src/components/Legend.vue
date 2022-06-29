<template>
    <div class="legend">
      <h3>Legend</h3>
      <ul class="itemGroups">
        <li v-for="(item, i) in topics" class="item">
          <div class="circle"></div>
          {{ item.label }}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Legend",
  props: {
    msg: String
  },
  data(){
    return{
      currentIndex: 0,
      topics:
      [
        {
          "label" : "Black"
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


h3{
  margin-left: 30px;
  margin-bottom: 1rem;
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
