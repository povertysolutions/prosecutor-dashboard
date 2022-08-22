<template>
  <div class="flowchart">
    <section class="box intro">
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
    <section class="box conclusion">
      <h3>Conclusion</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
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
      <template #node-custom="props">
        <CustomNode :data="props.data"/>
      </template>


    </VueFlow>
    <div class="scrim" v-if="showTakeover"></div>
    <NodeTakeover class="takeover"  :model="currentNode" @close="closeTakeover" v-if="showTakeover"/>

  </div>
</template>

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType, Position, useVueFlow } from '@braks/vue-flow'
import nodes from "../../assets/nodes.json"
import CustomEdge from './CustomEdge.vue'
import CustomNode from './CustomNode.vue'
import NodeTakeover from "./NodeTakeover"
import content from "../../assets/flowchart.json"
import ref from "vue"

const { getNode } = useVueFlow()

const onLoad = (flowInstance) => flowInstance.fitView()
const onEdgeUpdateStart = (edge) => console.log('start update', edge)
const onEdgeUpdateEnd = (edge) => console.log('end update', edge)
const onEdgeUpdate = ({ edge, connection }) => {
  elements.value = updateEdge(edge, connection, elements.value)
}
const onConnect = (params) => (elements.value = addEdge(params, elements.value))

const hello = () => {

}

export default {
  name: "Flowchart",
  components: { VueFlow, CustomNode, CustomEdge, NodeTakeover },
  data() {
    return {
      showTakeover: false,
      lang: "en",
      currentNode: null,
      nodeTypes: {
        customNode: CustomNode,
        connectionMode: ConnectionMode.Loose,

      },
      elements: [
        { id: '1', position: { x: 550, y: 0 }, data: { txtId: "social", bottomThirds: true }},
        { id: '2', position: { x: 400, y: 150 }, data: { txtId: "initial-arrest" }},
        { id: '3', position: { x: 700, y: 150 }, data: { txtId: "warrent-request" }},
        { id: '4', position: { x: 550, y: 300 }, data: { txtId: "referral", topThirds: true }},
        { id: '5', position: { x: 550, y: 450 }, data: { txtId: "assignment", bottomThirds: true }},
        { id: '6', position: { x: 350, y: 300 }, data: { txtId: "rejection" }},
        { id: '7', position: { x: 400, y: 700 }, data: { txtId: "warrent-arrest" }},
        { id: '8', position: { x: 700, y: 650 }, data: { txtId: "diversion" }},
        { id: '9', position: { x: 550, y: 950 }, data: { txtId: "arraignment", topThirds: true, bottomThirds: true }},
        { id: '10', position: { x: 700, y: 800 }, data: { txtId: "speciality" }},

        { id: '11', position: { x: 700, y: 1100 }, data: { txtId: "plea" }},
        { id: '12', position: { x: 400, y: 1100 }, data: { txtId: "trial" }},
        { id: '13', position: { x: 100, y: 1100 }, data: { txtId: "aquittal-dismissal" }},
        { id: '14', position: { x: 550, y: 1350 }, data: { txtId: "conviction", topThirds: true, leftThirds: true }},

        { id: '15', position: { x: 300, y: 1275 }, data: { txtId: "fines" }},
        { id: '16', position: { x: 180, y: 1350 }, data: { txtId: "community-service" }},
        { id: '17', position: { x: 50, y: 1425 }, data: { txtId: "probation" }},

        { id: '18', position: { x: 550, y: 1500 }, data: { txtId: "incarceration" }},
        { id: '19', position: { x: 550, y: 1650 }, data: { txtId: "parole" }},
        { id: '20', position: { x: 550, y: 1800 }, data: { txtId: "release", topThirds: true, bottomThirds: true }},
        { id: '21', position: { x: 400, y: 1950 }, data: { txtId: "rehab" }},
        { id: '22', position: { x: 700, y: 1950 }, data: { txtId: "recidivism" }},


        { id: 'e1-3', source: '1', target: '2', sourceHandle: 'bottomLeft', targetHandle: 'topCenter' },
        { id: 'e1-2', source: '1', target: '3', sourceHandle: 'bottomRight', targetHandle: 'topCenter' },
        { id: 'e2-4', source: '2', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topLeft' },
        { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottomCenter', targetHandle: 'topRight' },
        { id: 'e4-5', source: '4', target: '5', sourceHandle: 'bottomCenter', targetHandle: 'topCenter' },
        { id: 'e4-6', source: '4', target: '6', sourceHandle: 'leftCenter', targetHandle: 'rightCenter' },
        { id: 'e5-7', source: '5', target: '7', sourceHandle: 'bottomLeft', targetHandle: 'topCenter' },
        { id: 'e5-8', source: '5', target: '8', sourceHandle: 'bottomRight', targetHandle: 'topCenter' },
        { id: 'e5-9', source: '5', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topCenter' },
        { id: 'e7-9', source: '7', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topLeft' },
        { id: 'e8-10', source: '8', target: '10', sourceHandle: 'bottomCenter', targetHandle: 'topCenter' },
        { id: 'e9-10', source: '10', target: '9', sourceHandle: 'bottomCenter', targetHandle: 'topRight' }, //FLIPPED -- NEED TO FIX

        { id: 'e9-11', source: '9', target: '11', sourceHandle: 'bottomRight', targetHandle: 'topCenter' },
        { id: 'e9-12', source: '9', target: '12', sourceHandle: 'bottomLeft', targetHandle: 'topCenter' },
        { id: 'e12-13', source: '12', target: '13', sourceHandle: 'leftCenter', targetHandle: 'rightCenter'},
        { id: 'e11-14', source: '11', target: '14', sourceHandle: 'bottomCenter', targetHandle: 'topRight' },
        { id: 'e12-14', source: '12', target: '14', sourceHandle: 'bottomCenter', targetHandle: 'topLeft' },

        { id: 'e14-15', source: '14', target: '15', sourceHandle: 'leftTop', targetHandle: 'rightCenter' },
        { id: 'e14-16', source: '14', target: '16', sourceHandle: 'leftCenter', targetHandle: 'rightCenter' },
        { id: 'e14-17', source: '14', target: '17', sourceHandle: 'leftBottom', targetHandle: 'rightCenter' },

        { id: 'e14-18', source: '14', target: '18', sourceHandle: 'bottomCenter', targetHandle: 'topCenter'},
        { id: 'e18-19', source: '18', target: '19', sourceHandle: 'bottomLeft', targetHandle: 'topCenter'},
        { id: 'e19-20', source: '19', target: '20', sourceHandle: 'bottomCenter', targetHandle: 'topLeft' },
        { id: 'e18-20', source: '18', target: '20', sourceHandle: 'bottomRight', targetHandle: 'topRight' },

        { id: 'e20-21', source: '20', target: '21', sourceHandle: 'bottomLeft', targetHandle: 'topCenter' },
        { id: 'e20-22', source: '20', target: '22', sourceHandle: 'bottomRight', targetHandle: 'topCenter' },
      ]
    }
  },
  methods:{
    onLoad(){
      console.log("onload!");
    },
    openTakeover(nextNode){
      this.currentNode = nextNode;
      this.showTakeover = true;

    },
    closeTakeover(){
      this.showTakeover = false;
    }
  },
  mounted() {
    // Add an element after mount

    for (var i in this.elements){
      //this.elements.push(nodes[i]);
      var element = this.elements[i];
      if (element.position != null){
        var txtId = element.data.txtId;
        element.type = "customNode";
        element.draggable = false;

        if (content[txtId]){
          //console.log(content[txtId])
        }
        else{
          console.log("could not find: " + txtId);
        }

        //element.label = content[txtId].label[this.lang]
        element.data.content = content[txtId];
        element.data.txtId = txtId;

        element.events = {
          click: (event) => {
            this.openTakeover(event.node.data.content);
          }
        }
      }
      else{
        element.markerEnd = MarkerType.ArrowClosed;
      }
    }
  }
}
</script>

<style lang="scss">

@import "@braks/vue-flow/dist/style.css";
@import "@/styles/main.scss";
//@import "@braks/vue-flow/dist/theme-default.css";
.flowchart{


}

.scrim{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2200px;
  background-color: $color-white;
  opacity: .85;
  z-index: 999;
}

.takeover{
    z-index: 1000;
}

.box{
  position: absolute;
  width: 350px;
  //background-color: $color-purple;
  margin-top: 13rem;
  margin-left: 3rem;
  padding: 2rem;
  color: $color-black;
  border-radius: 20px;

  &.intro{
    margin-top: 13rem;
    margin-left: 3rem;
  }

  &.conclusion{
    margin-top: 100rem;
    margin-left: 3rem;
  }
}

.basicflow{
  position: absolute;
  //margin-top: -150px;
  //margin-left: -150px;
  margin-top: 2rem;
  margin-left: 13rem;
  width: 100%;
  height: 2200px;
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
