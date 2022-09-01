<template>
  <div class="background">
    <!-- <h2>This is the flowchart page.</h2> -->
    <Flowchart></Flowchart>
  </div>
</template>

<script>
import Flowchart from "@/components/context/Flowchart.vue"

export default {
  name: "Context",
  components: { Flowchart }
}

</script>

<style lang="scss" scoped>
.background{
  margin: 5rem 2rem;
  width: 100%;
  height: 2600px;
}
</style>
