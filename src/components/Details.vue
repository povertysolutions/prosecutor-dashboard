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
        <p>{{sections[currentIndex].body}}</p>
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

.details{

}

.tab{
  display: inline-block;
  background-color: $color-medium-grey;
  color: $color-white;
  margin: 0 2px;
  border-radius: $background-radius $background-radius 0 0;
  padding: 5px 80px;

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
  }
}

</style>
