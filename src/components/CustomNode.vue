<template>
  <button :class="['customNode', data.core ? 'core' : '']" @click="click">
    <div class="centered">
      <div class="circle" v-if="data.core"></div>
      <label>{{ label }}</label>
    </div>
  </button>
  <Handle v-if="data.topThirds" id="topLeft" type="target" :position="top" :style="{'left': topLeftOffset + 'px'}" />
  <Handle id="topCenter" type="target" :position="top" />
  <!-- <Handle id="topCenter" type="source" :position="top" /> -->
  <Handle v-if="data.topThirds" id="topRight" type="target" :position="top" :style="{'left': 'auto', 'right': topRightOffset + 'px'}" />

  <Handle v-if="data.bottomThirds" id="bottomLeft" type="source" :position="bottom" :style="{'left': bottomLeftOffset + 'px'}" />
  <Handle id="bottomCenter" type="source" :position="bottom" />
  <Handle id="bottomCenter" type="target" :position="bottom" />
  <Handle v-if="data.bottomThirds" id="bottomRight" type="source" :position="bottom" :style="{'left': 'auto', 'right': bottomRightOffset + 'px'}" />

  <Handle v-if="data.leftThirds" id="leftTop" type="target" :position="left" :style="{'top': leftTopOffset + 'px'}" />
  <Handle id="leftCenter" type="target" :position="left" />
  <Handle v-if="data.leftThirds" id="leftBottom" type="target" :position="left" :style="{'bottom': 'auto', 'top': leftBottomOffset + 'px'}" />

  <Handle v-if="data.rightThirds" id="rightTop" type="source" :position="right" :style="{'top': rightTopOffset + 'px'}" />
  <Handle id="rightCenter" type="source" :position="right" />
  <Handle v-if="data.rightThirds" id="rightBottom" type="source" :position="right" :style="{'top': 'auto', 'bottom': rightBottomOffset + 'px'}" />

</template>

//  ------topLeft topCenter topRight-------
//  |                                     |
//  leftTop                        rightTop
//  leftCenter                  rightCenter
//  leftBottom                  rightBottom
//  |                                     |
//  --bottomLeft bottomCenter bottomRight--

<script>
import { VueFlow, ConnectionMode, Controls, addEdge, updateEdge, MarkerType, Position, Handle } from '@braks/vue-flow'
import { computed } from 'vue'

export default{
  name: "CustomNode",
  components: { Handle },
  props: {
    label:{
      type: String,
      default: "Default"
    },
    data: {
      type: Object,
      default: {
        topThirds: false,
        bottomThirds: false,
        leftThirds: false,
        rightThirds: false,
        draggable: false
      }
      //required: true,
    },
    // light:{
    //   type: Boolean,
    //   default: false
    // },
  },
  data(){
    return{
      topLeftOffset: 20,
      topRightOffset: 15,
      bottomLeftOffset: 20,
      bottomRightOffset: 15,
      leftTopOffset: 5,
      leftBottomOffset: -10,
      rightTopOffset: 5,
      rightBottomOffset: 10,
      top: Position.Top,
      bottom: Position.Bottom,
      right: Position.Right,
      left: Position.Left
    }
  },
  methods:{
    click(){
      console.log("click!");
      this.$emit('test');
    }
  }
}

</script>

<style lang="scss">

@import "@braks/vue-flow/dist/style.css";
@import "@/styles/main.scss";

// .customNode{
//   width: 100px;
// }

.customNode{
  //position: absolute;
  border-radius: 10px;
  //transform: translate(-50%, 0);
  //text-align: center;
  background-color: $color-white;
  border: 2px $color-medium-grey solid;

  .centered{
    transition: all 100ms ease-in-out;
    transition-delay: 100ms;
    //max-width: 200px;
    margin: 8px 18px;
    text-align: center;

    &:hover{
      margin: 12px 24px;
    }

    label{
      display: inline-block;
      color: $color-medium-grey;
      font-size: 20px;
    }
  }



  &.core{
    background-color: $color-medium-grey;

    .centered{
      margin: 15px 30px;
      min-width: 150px;

      &:hover{
        margin: 20px 36px;
      }
      }

    .circle{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $color-white;
      vertical-align: middle;
    }

    label{
      display: inline-block;
      color: $color-white;
      max-width: 100px;
      margin-left: 15px;
      vertical-align: middle;
    }
  }

}


</style>
