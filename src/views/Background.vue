<template>
  <div class="background">
    <h2>This is the flowchart page.</h2>
    <Flowchart></Flowchart>
  </div>
</template>

<script>
import Flowchart from "@/components/Flowchart"

export default {
  name: "Background",
  components: { Flowchart }
}

</script>

<style lang="scss" scoped>
.background{
  position: fixed;
  margin: 5rem 2rem;
  width: 100%;
  height: 100%;
}
</style>
