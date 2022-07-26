<template>
  <div >
    <VueFlow v-model="elements"
             class="basicflow customnodeflow"
             :default-zoom="1"
             :min-zoom="1" :max-zoom="1"
             :nodes-draggable="false"
             :nodeTypes="nodeTypes"
             @pane-ready="onLoad"
            :connection-mode="connectionMode"
            :connection-line-style="connectionLineStyle"
            :fit-view-on-init="true"
             >
    </VueFlow>
  </div>
</template>

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType, Position, useVueFlow } from '@braks/vue-flow'
import nodes from "../../assets/nodes.json"
import CustomEdge from './CustomEdge.vue'
import CustomNode from './CustomNode.vue'

const { getNode } = useVueFlow()

const onLoad = (flowInstance) => flowInstance.fitView()
const onEdgeUpdateStart = (edge) => console.log('start update', edge)
const onEdgeUpdateEnd = (edge) => console.log('end update', edge)
const onEdgeUpdate = ({ edge, connection }) => {
  elements.value = updateEdge(edge, connection, elements.value)
}
const onConnect = (params) => (elements.value = addEdge(params, elements.value))

export default {
  name: "Flowchart",
  components: { VueFlow, CustomNode, CustomEdge },
  data() {
    return {
      nodeTypes: {
        customNode: CustomNode,
        connectionMode: ConnectionMode.Loose
      },
      elements: [
        // { id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 }, class: 'light', draggable: false },
        // { id: '2', type: 'output', label: 'Node 2', position: { x: 100, y: 100 }, class: 'light' },
        // { id: '3', label: 'Node 3', position: { x: 400, y: 100 }, class: 'light' },
        // { id: '4', label: 'Node 4', position: { x: 150, y: 200 }, class: 'light' },
        // { id: '5', type: 'output', label: 'Node 5', position: { x: 300, y: 300 }, class: 'light' },

        //{ id: '1', label: '', type: '', position: { x: 0, y: 0 }, class: '' },
        { id: '1', label: 'Social Determinants', position: { x: 250, y: 0 }, class: 'independent', type: 'customNode', data: { core : true }},
        { id: '2', label: 'Initial Arrest', position: { x: 100, y: 150 }, class: 'independent', type: 'customNode' },
        { id: '3', label: 'Warrant Request', position: {  x: 400, y: 150 }, class: 'independent', type: 'customNode' },
        { id: '4', label: 'Referral',  position: { x: 250, y: 300 }, class: 'sole', type: 'customNode', data: { core : true } },
        // { id: '5', label: 'Attorney and Court Assignment', position: { x: 100, y: 300 }, class: 'independent' },
        // { id: '6', label: 'Rejection', position: { x: 400, y: 200 }, class: 'sole' },
        // { id: '7', label: 'Warrant Arrest', position: { x: 100, y: 450 }, class: 'mixed', sourcePosition: Position.Right },
        // { id: '8', label: 'Diversion', position: { x: 400, y: 300 }, class: 'sole' },
        // { id: '9', label: 'Arraignment', position: { x: 350, y: 450 }, class: 'mixed', sourcePosition: Position.Right },
        // { id: '10', label: 'Specialty Courts', position: { x: 550, y: 400 }, class: 'mixed',  targetPosition: Position.Left },


        { id: 'e1-3', source: '1', target: '2', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e1-2', source: '1', target: '3', sourceHandle: 'bottomRight', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topLeft', markerEnd: MarkerType.ArrowClosed },
        { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topRight', markerEnd: MarkerType.ArrowClosed},
        // { id: 'e4-5', source: '4', target: '5', sourceHandle: 'bottomLeft', markerEnd: MarkerType.ArrowClosed},
        // { id: 'e4-6', source: '4', target: '6', sourceHandle: 'bottomRight', markerEnd: MarkerType.ArrowClosed},
        // { id: 'e5-7', source: '5', target: '7',  markerEnd: MarkerType.ArrowClosed},
        // { id: 'e5-8', source: '5', target: '8',  markerEnd: MarkerType.ArrowClosed},
        // { id: 'e5-9', source: '5', target: '9',  markerEnd: MarkerType.ArrowClosed},
        // { id: 'e7-9', source: '7', target: '9',  markerEnd: MarkerType.ArrowClosed},
        // { id: 'e8-10', source: '8', target: '10',  markerEnd: MarkerType.ArrowClosed},
        // { id: 'e9-10', source: '9', target: '10',  markerEnd: MarkerType.ArrowClosed },

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
//@import "@braks/vue-flow/dist/theme-default.css";

.basicflow{
  position: absolute;
  margin-top: -150px;
  width: 100%;
  height: 100%;
  //z-index: -1;
}

// .vue-flow__node{
//   background-color: $color-medium-grey;
//   border-radius: 10px;
//   //text-align: center;
//
//   &.independent{
//     background-color: $color-light-blue;
//   }
//
//   &.sole{
//     background-color: $color-orange;
//   }
//
//   &.mixed{
//     background-color: $color-purple;
//   }
//
//   &.limited{
//     background-color: $color-dark-blue;
//   }
//
//   div{
//     max-width: 200px;
//     font-size: 20px;
//     padding: 10px 20px;
//     color: $color-white;
//     text-align: center;
//   }
// }

.vue-flow__edges{
  path{
    stroke: #bbbbbb;
    stroke-width: 3px;
  }
}

</style>
