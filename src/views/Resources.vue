<template>
  <div class="view">
    <h1>This is the resource page.</h1>
    <PackChart></PackChart>
  </div>
</template>

<script>
import PackChart from "@/components/Packchart.vue"

export default {
  name: "Resources",
  components: { PackChart }
}

</script>
