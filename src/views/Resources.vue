<template>
  <div class="view">
    <h2>This is the resource page.</h2>

    <mapbox-map
      :accessToken="myAccessToken"
      mapStyle="light-v10"
      class="map"
      :center="center"
    />
  </div>
</template>

<script>
import { MapboxMap } from "vue-mapbox-ts";

export default {
  name: "Resources",
  components:{ MapboxMap },
  data(){
    return{
      myAccessToken: "pk.eyJ1IjoiY2FybHloZ24iLCJhIjoiY2w1anhqZWk3MDQ4NjNjcDZiMWZ6Z2kxNSJ9.gt159_cpZNyFSov9XtUpcg",
      center: [0, 0],
    }
  }
}



</script>

<style lang="scss" scoped>
.view{
  position: fixed;
  margin: 5rem 2rem;
  width: 100%;
  height: 100%;
}

</style>
