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
        { id: '1', label: 'Social Determinants', position: { x: 250, y: 0 }, class: 'independent', type: 'customNode', data: { core : true, bottomThirds: true }},
        { id: '2', label: 'Initial Arrest', position: { x: 100, y: 150 }, class: 'independent', type: 'customNode' },
        { id: '3', label: 'Warrant Request', position: {  x: 400, y: 150 }, class: 'independent', type: 'customNode' },
        { id: '4', label: 'Referral',  position: { x: 250, y: 300 }, class: 'sole', type: 'customNode', data: { core : true, topThirds: true } },
        { id: '5', label: 'Attorney and Court Assignment', position: { x: 250, y: 450 }, class: 'independent', type: 'customNode', data: { core : true, bottomThirds: true } },
        { id: '6', label: 'Rejection', position: { x: 550, y: 300 }, class: 'sole', type: 'customNode' },
        { id: '7', label: 'Warrant Arrest', position: { x: 100, y: 700 }, class: 'mixed', type: 'customNode' },
        { id: '8', label: 'Diversion', position: { x: 400, y: 650 }, class: 'sole', type: 'customNode' },
        { id: '9', label: 'Arraignment', position: { x: 250, y: 950 }, class: 'mixed', type: 'customNode', data: { core : true, topThirds: true, bottomThirds: true } },
        { id: '10', label: 'Specialty Courts', position: { x: 400, y: 800 }, class: 'mixed',  type: 'customNode' },

        { id: '11', label: 'Plea Offer', position: { x: 150, y: 1100 }, class: 'mixed',  type: 'customNode' },
        { id: '12', label: 'Trial', position: { x: 350, y: 1100 }, class: 'mixed',  type: 'customNode',  data: { core : true }},
        { id: '13', label: 'Aquittal or Dismissal', position: { x: 650, y: 1100 }, class: 'mixed',  type: 'customNode' },
        { id: '14', label: 'Conviction', position: { x: 250, y: 1350 }, class: 'mixed',  type: 'customNode',  data: { core : true, topThirds: true, rightThirds: true } },
        { id: '15', label: 'Fines', position: { x: 600, y: 1275 }, class: 'mixed',  type: 'customNode' },
        { id: '16', label: 'Community Service', position: { x: 600, y: 1350 }, class: 'mixed',  type: 'customNode' },
        { id: '17', label: 'Probation or Suspended Sentence', position: { x: 600, y: 1425 }, class: 'mixed',  type: 'customNode' },
        { id: '18', label: 'Incarceration', position: { x: 250, y: 1500 }, class: 'mixed',  type: 'customNode',  data: { core : true, bottomThirds: true } },
        { id: '19', label: 'Parole', position: { x: 250, y: 1650 }, class: 'mixed',  type: 'customNode' },
        { id: '20', label: 'Release', position: { x: 250, y: 1800 }, class: 'mixed',  type: 'customNode', data: { core : true, topThirds: true, bottomThirds: true } },
        { id: '21', label: 'Rehabilitation', position: { x: 100, y: 1950 }, class: 'mixed',  type: 'customNode',  data: { core : true } },
        { id: '22', label: 'Recidivism', position: { x: 400, y: 1950 }, class: 'mixed',  type: 'customNode',  data: { core : true} },


        { id: 'e1-3', source: '1', target: '2', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e1-2', source: '1', target: '3', sourceHandle: 'bottomRight', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topLeft', markerEnd: MarkerType.ArrowClosed },
        { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topRight', markerEnd: MarkerType.ArrowClosed},
        { id: 'e4-5', source: '4', target: '5', sourceHandle: 'bottomCenter', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e4-6', source: '4', target: '6', sourceHandle: 'rightCenter', targetHandle: 'leftCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e5-7', source: '5', target: '7', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e5-8', source: '5', target: '8', sourceHandle: 'bottomRight', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e5-9', source: '5', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e7-9', source: '7', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topLeft', markerEnd: MarkerType.ArrowClosed},
        { id: 'e8-10', source: '8', target: '10', sourceHandle: 'bottomCenter', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed},
        { id: 'e9-10', source: '10', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topRight', markerEnd: MarkerType.ArrowClosed }, //FLIPPED -- NEED TO FIX

        { id: 'e9-11', source: '9', target: '11', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e9-12', source: '9', target: '12', sourceHandle: 'bottomRight', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e12-13', source: '12', target: '13', sourceHandle: 'rightCenter', targetHandle: 'leftCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e11-14', source: '11', target: '14', sourceHandle: 'bottomCenter', targetHandle: 'topLeft', markerEnd: MarkerType.ArrowClosed },
        { id: 'e12-14', source: '12', target: '14', sourceHandle: 'bottomCenter', targetHandle: 'topRight', markerEnd: MarkerType.ArrowClosed },

        { id: 'e14-15', source: '14', target: '15', sourceHandle: 'rightTop', targetHandle: 'leftCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e14-16', source: '14', target: '16', sourceHandle: 'rightCenter', targetHandle: 'leftCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e14-17', source: '14', target: '17', sourceHandle: 'rightBottom', targetHandle: 'leftCenter', markerEnd: MarkerType.ArrowClosed },

        { id: 'e14-18', source: '14', target: '18', sourceHandle: 'bottomCenter', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e18-19', source: '18', target: '19', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e19-20', source: '19', target: '20', sourceHandle: 'bottomCenter', targetHandle: 'topLeft', markerEnd: MarkerType.ArrowClosed },
        { id: 'e18-20', source: '18', target: '20', sourceHandle: 'bottomRight', targetHandle: 'topRight', markerEnd: MarkerType.ArrowClosed },

        { id: 'e20-21', source: '20', target: '21', sourceHandle: 'bottomLeft', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
        { id: 'e20-22', source: '20', target: '22', sourceHandle: 'bottomRight', targetHandle: 'topCenter', markerEnd: MarkerType.ArrowClosed },
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
  //margin-top: -150px;
  //margin-left: -150px;
  width: 100%;
  height: 2200px;
  z-index: -1;
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
