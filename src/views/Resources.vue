<template>
  <div class="view">
    <h2>This is the resource page.</h2>
    <Map/>
  </div>
</template>

<script>
import Map from "@/components/Map.vue"

export default {
  name: "Resources",
  components:{ Map }
}


</script>

<style lang="scss" scoped>
.view{
  height: 700px;
}

.map{
  position: absolute;
  margin-top: 1rem;
  width: 100%;
  height: 600px;
}

</style>
