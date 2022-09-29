<template>
  <button :class="['customNode', core ? 'core' : '', influence, separate ? 'separate' : '', 'shrink-hover']"
          v-on:input="click(data.content)">
    <div class="centered">
      <img class="circle" v-if="core" :src="icon"/>
      <label :class="[influence, separate ? 'separate' : '']">{{ label }}</label>
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

  <Handle v-if="data.leftThirds" id="leftTop" type="source" :position="left" :style="{'top': leftTopOffset + 'px'}" />
  <Handle id="leftCenter" type="source" :position="left" />
  <Handle v-if="data.leftThirds" id="leftBottom" type="source" :position="left" :style="{'top': 'auto', 'bottom': leftBottomOffset + 'px'}" />

  <Handle v-if="data.rightThirds" id="rightTop" type="target" :position="right" :style="{'top': rightTopOffset + 'px'}" />
  <Handle id="rightCenter" type="target" :position="right" />
  <Handle v-if="data.rightThirds" id="rightBottom" type="target" :position="right" :style="{'top': 'auto', 'bottom': rightBottomOffset + 'px'}" />

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
import Asset from "@/utils/assets"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default{
  name: "CustomNode",
  components: { Handle },
  props: {
    data: {
      type: Object,
      default: {
        topThirds: false,
        bottomThirds: false,
        leftThirds: false,
        rightThirds: false,
        draggable: false,
        content: Object,
        txtId: ""
      }
    }
  },
  data(){
    return{
      topLeftOffset: 20,
      topRightOffset: 15,
      bottomLeftOffset: 20,
      bottomRightOffset: 15,
      leftTopOffset: 5,
      leftBottomOffset: 10,
      rightTopOffset: 5,
      rightBottomOffset: 10,
      top: Position.Top,
      bottom: Position.Bottom,
      right: Position.Right,
      left: Position.Left,
    }
  },
  computed:{
    ...mapGetters({
      langId: "lang/id",
    }),
    label(){
      return this.getText(this.data.content.label, this.langId);
    },
    core(){
      return this.data.content.core;
    },
    influence(){
      return this.data.content.influence;
    },
    separate(){
      return this.data.content.separate;
    },
    icon(){
      if (this.data.content.icon){
        return Asset.load("icons/" + this.data.content.icon);
      }
      return "";
    }
  },
  methods:{
    getText(model){
      return Text.get(model, this.langId);
    }
  }
}

</script>

<style lang="scss">

@import "@braks/vue-flow/dist/style.css";
@import "@/styles/main.scss";

.customNode{
  //position: absolute;
  border-radius: 10px;
  //transform: translate(-50%, 0);
  //text-align: center;
  background-color: $color-white;
  //border: 2px $color-medium-grey solid;
  border: 2px $color-dark-blue solid;

  //color: $color-medium-grey;
  color: $color-dark-blue;

  &.separate{
    border-color: $color-light-orange;
  }

  // &.independent{
  //   border-color: $color-light-blue;
  // }
  //
  // &.sole{
  //   border-color: $color-orange;
  // }
  //
  // &.mixed{
  //   border-color: $color-purple;
  // }
  //
  // &.limited{
  //   border-color: $color-dark-blue;
  // }


  .centered{
    margin: 8px 18px;
    text-align: center;

    label{
      display: inline-block;
      font-size: 20px;
      color: $color-dark-blue;
      //color: $color-medium-grey;

      &.separate{
        color: $color-light-orange;
      }

      // &.independent{
      //   color: $color-light-blue;
      // }
      //
      // &.sole{
      //   color: $color-orange;
      // }
      //
      // &.mixed{
      //   color: $color-purple;
      // }
      //
      // &.limited{
      //   color: $color-dark-blue;
      // }
    }
  }

  &.core{
    //background-color: $color-medium-grey;
    background-color: $color-dark-blue;

    &.separate{
      background-color: $color-light-orange;
    }
    // &.independent{
    //   background-color: $color-light-blue;
    // }
    //
    // &.sole{
    //   background-color: $color-orange;
    // }
    //
    // &.mixed{
    //   background-color: $color-purple;
    // }
    //
    // &.limited{
    //   background-color: $color-dark-blue;
    // }

    .centered{
      margin: 15px 30px;
      min-width: 150px;

      }

    .circle{
      display: inline-block;
      width: 50px;
      height: 50px;
      //border-radius: 50%;
      //background-color: $color-medium-grey;
      vertical-align: middle;
    }

    label{
      display: inline-block;
      color: $color-white !important;
      max-width: 100px;
      margin-left: 15px;
      vertical-align: middle;
    }
  }
}

</style>
