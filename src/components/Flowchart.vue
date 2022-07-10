<template>
  <div >
    <VueFlow v-model="elements"
             class="basicflow"
             :default-zoom="1"
             :min-zoom="1" :max-zoom="1"
             :nodes-draggable="false"
             @pane-ready="onLoad">
    </VueFlow>
  </div>
</template>

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType } from '@braks/vue-flow'
import nodes from "../../assets/nodes.json"
import CustomEdge from './CustomEdge.vue'

const onLoad = (flowInstance) => flowInstance.fitView()
const onEdgeUpdateStart = (edge) => console.log('start update', edge)
const onEdgeUpdateEnd = (edge) => console.log('end update', edge)
const onEdgeUpdate = ({ edge, connection }) => {
  elements.value = updateEdge(edge, connection, elements.value)
}
const onConnect = (params) => (elements.value = addEdge(params, elements.value))

export default {
  name: "Flowchart",
  components: { VueFlow, CustomEdge },
  data() {
    return {
      elements: [
        { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 }, class: 'light', draggable: false },
        { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
        { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
        { id: '4', label: 'Node 4', position: { x: 150, y: 200 }, class: 'light' },
        { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 }, class: 'light' },
        { id: 'e1-2', source: '1', target: '2',  template: CustomEdge},
        { id: 'e1-3',  source: '1', target: '3', markerEnd: MarkerType.Arrow },
        { id: 'e3-4', source: '3', target: '4', markerEnd: MarkerType.ArrowClosed,  marker: { width: 150, height: 100} }
      ]
    }
  },
  methods:{
    onLoad(){
      console.log("onload!");
    }
  },
  mounted() {
    // Add an element after mount
    for (var i in nodes){
      //this.elements.push(nodes[i]);
    }

  }
}
</script>

<style lang="scss">

@import "@braks/vue-flow/dist/style.css";
@import "@/styles/main.scss";
// @import "@braks/vue-flow/dist/theme-default.css";

.basicflow{
  position: fixed;
  width: 100%;
  height: 100%;
}

.vue-flow__node{
  background-color: $color-purple;
  border-radius: 10px;

  div{
    font-size: 20px;
    padding: 10px 20px;
    color: $color-white;
  }
}

.vue-flow__edges{

}

</style>
