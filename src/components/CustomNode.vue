<template>
  <div :class="['customNode', data.core ? 'core' : '']">
    <div class="centered">
      <div class="circle" v-if="data.core"></div>
      <label>{{ label }}</label>
    </div>
  </div>
  <Handle id="topLeft" type="target" :position="top" :style="{'left': topLeftOffset + 'px'}" />
  <Handle id="topCenter" type="target" :position="top" />
  <Handle id="topRight" type="target" :position="top" :style="{'left': 'auto', 'right': topRightOffset + 'px'}" />

  <Handle id="bottomLeft" type="source" :position="bottom" :style="{'left': bottomLeftOffset + 'px'}" />
  <Handle id="bottomCenter" type="source" :position="bottom" />
  <Handle id="bottomRight" type="source" :position="bottom" :style="{'left': 'auto', 'right': bottomRightOffset + 'px'}" />

  <Handle id="leftTop" type="source" :position="left" :style="{'top': leftTopOffset + 'px'}" />
  <Handle id="leftCenter" type="source" :position="left" />
  <Handle id="leftBottom" type="source" :position="left" :style="{'bottom': 'auto', 'top': leftBottomOffset + 'px'}" />

  <Handle id="rightTop" type="source" :position="right" :style="{'top': rightTopOffset + 'px'}" />
  <Handle id="rightCenter" type="source" :position="right" />
  <Handle id="rightBottom" type="source" :position="right" :style="{'bottom': 'auto', 'top': rightBottomOffset + 'px'}" />
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
      default: {}
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
      rightBottomOffset: -10,
      top: Position.Top,
      bottom: Position.Bottom,
      right: Position.Right,
      left: Position.Left
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
    //max-width: 200px;
    margin: 8px 18px;
    text-align: center;

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
      text-align: left;
      min-width: 150px;
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
