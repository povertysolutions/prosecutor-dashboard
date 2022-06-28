<template>
    <div class="sidebar">
      <h3>Topics</h3>
      <div class="topicsGroups">
        <button v-for="(topic, i) in topics"
                :class="['topic', currentIndex == i ? 'selected' : '']"
                @click="press(i)">
          {{ topic.title }}
          <div :class="['circle', currentIndex == i ? 'selected' : '']"></div>
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
      topics:
      [
        {
          "title" : "Filing Decisions"
        },
        {
          "title" : "Filing Charges"
        },
        {
          "title" : "Habitual Offenders"
        },
        {
          "title" : "Case Outcomes"
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

.sidebar{
  float: left;
  width: 12rem;
  height: 100vh;
  background-color: $color-black;
}

.details{

}

h3{
  color: $color-white;
  margin-left: 30px;
}
.topic{
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  margin-left: 35px;
  margin-bottom: 5px;
  //font-size: 1.1rem;
  &.selected{
    //font-weight: bold;
    color: $color-white;
  }

  .circle{

    border: $color-green 2px solid;
    width: 1rem;
    height: 1rem;
    transform: translate(calc(-1rem - 10px), calc(-1rem - 3px));
    border-radius: 30px;


    &.selected{
      background-color: $color-green;
    }

  }
  &.selected{

  }

}


</style>
