<template>
  <div class="resources">
    <h1>This is the resource page.</h1>
    <Flowchart></Flowchart>

  </div>
</template>

<script>
import Flowchart from "@/components/Flowchart"

export default {
  name: "Resources",
  components: { Flowchart }
}



</script>

<style lang="scss" scoped>
.resources{
  position: fixed;
  width: 100%;
  height: 100%;
  border: 2px solid magenta;
}

</style>
