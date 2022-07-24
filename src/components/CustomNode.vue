<template>
  <div class="customNode">Custom Node</div>
  <Handle id="a" type="target" :position="top" :style="handleStyleA" />
  <Handle id="b" type="target" :position="top" :style="handleStyleB"/>
  <Handle id="c" type="source" :position="bottom" :style="handleStyleC" />
  <Handle id="d" type="source" :position="bottom" :style="handleStyleD"/>
</template>

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType, Position, Handle  } from '@braks/vue-flow'
import { computed } from 'vue'

export default{
  name: "CustomNode",
  components: { Handle },
  props: {
    sourceX: {
      type: Number,
      //required: true,
    }
  },
  data(){
    return{
      handleStyleA : {
        //backgroundColor: props.data.color,
        left: '30px',
      },
      handleStyleB : {
        right: '10px',
        left: 'auto'
      },
      handleStyleC : {
        left: '30px'
      },
      handleStyleD : {
        right: '30px'
      },
      top: Position.Top,
      bottom: Position.Bottom
    }
  }
}

</script>

<style lang="scss">

@import "@braks/vue-flow/dist/style.css";
@import "@/styles/main.scss";

.customNode{
  width: 100px;
}

</style>
