<template>
    <div class="sidebar">
      <h3>Topics</h3>
      <div class="topicGroups">
        <RouterLink v-for="(object, key) in topics"
                :class="['topic', key == topicId ? 'selected' : '']"
                :to="'/dashboard/' + key">
          {{ object.label.en }}
          <!-- <div :class="['circle', currentIndex == key ? 'selected' : '']"></div> -->
        </RouterLink>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    topics: Object,
    topicId: String
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
.topic{
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  text-decoration: none;
  display: inline-block;
  //font-size: 1.1rem;
  &.selected {
    background-color: #ffffff33;
    color: $color-white;
    font-weight: 600;
  }
}

</style>
