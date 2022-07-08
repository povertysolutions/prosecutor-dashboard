<template>
  <div style="height: 300px">
    <VueFlow v-model="elements"
             class="basicflow"
             :default-zoom="1"
             :min-zoom="1" :max-zoom="1"
             :nodes-draggable="isDraggable"
             @pane-ready="onLoad">
    </VueFlow>
  </div>
</template>

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType } from '@braks/vue-flow'
import nodes from "../../assets/nodes.json"

const onLoad = (flowInstance) => flowInstance.fitView()
const onEdgeUpdateStart = (edge) => console.log('start update', edge)
const onEdgeUpdateEnd = (edge) => console.log('end update', edge)
const onEdgeUpdate = ({ edge, connection }) => {
  elements.value = updateEdge(edge, connection, elements.value)
}
const onConnect = (params) => (elements.value = addEdge(params, elements.value))

export default {
  name: "Flowchart",
  components: { VueFlow },
  data() {
    return {
      elements: [
        { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 }, class: 'light', draggable: false },
        { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
        { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
        { id: '4', label: 'Node 4', position: { x: 150, y: 200 }, class: 'light' },
        { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 }, class: 'light' },
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-3', label: 'edge with arrowhead', source: '1', target: '3', markerEnd: MarkerType.Arrow },
        {
          id: 'e4-5',
          type: 'step',
          label: 'step-edge',
          source: '4',
          target: '5',
          style: { stroke: 'orange' },
          labelBgStyle: { fill: 'orange' },
        },
        { id: 'e3-4', type: 'smoothstep', label: 'smoothstep-edge', source: '3', target: '4' }
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

<style lang="scss" scoped>

@import "@braks/vue-flow/dist/style.css";
@import "@braks/vue-flow/dist/theme-default.css";

.basicflow{
  position: fixed;
  height: 100%;
}

</style>
