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

h3{
  color: $color-white;
  margin: 1rem;
  margin-top: 5rem;
}
.topic{
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
