<template>
  <g>
    <path
      class="animated"
      fill="none"
      stroke="#bbbbbb"
      :stroke-width="2.5"
      :d="`M${sourceX},${sourceY} C ${midX1} ${midY1} ${midX2} ${midY2} ${targetX},${targetY}`"
      marker-end="url(#arrowclosed)"
    />
    <circle :cx="targetX" :cy="targetY" fill="#bbbbbb" :r="1" stroke="#bbbbbb" :stroke-width="1.5" />
  </g>
</template>

<script>
export default{
  name: "CustomEdge",
  props: {
    sourceX: {
      type: Number,
      required: true,
    },
    sourceY: {
      type: Number,
      required: true,
    },
    targetX: {
      type: Number,
      required: true,
    },
    targetY: {
      type: Number,
      required: true,
    }
  },
  computed: {
    midX1(){
      return (this.sourceX + this.targetX) * 6 / 10
    },
    midY1(){
      return (this.sourceY + this.targetY) * 6 / 10
    },
    midX2(){
      return (this.sourceX + this.targetX) * 4 / 10
    },
    midY2(){
      return (this.sourceY + this.targetY) * 4 / 10
    }
  }
}
</script>
