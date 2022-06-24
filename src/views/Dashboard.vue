<template>
  <div class="view">
    <h1>This is the dashboard.</h1>
    <LineGraph></LineGraph>
  </div>
</template>

<script>
import LineGraph from "@/components/LineGraph"

export default {
  name: "Resources",
  components: { LineGraph }
}

</script>
