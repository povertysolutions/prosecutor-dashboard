<template>
  <div class="nodeTakeover">
    <section class="main">
      <button @click="$emit('close')"><img :src="closeIcon"/></button>
      <div class="text">
        <h2>{{ getText(model.label) }}</h2>
        <h4>{{ getText(model.subheader) }}</h4>
        <!-- <router-link to='/glossary'>test router</router-link> -->
        <p class="lightLink" v-html="getDescription(model.description)"></p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> -->
        <br>
        <!-- <p v-if="model.influence === 'independent'">This stage is <b>independent</b> from the procescution.</p>
        <p v-if="model.influence === 'sole'">This stage is <b>solely</b> controlled by the prosecution</p>
        <p v-if="model.influence === 'mixed'">This stage has <b>mixed</b> influence from the procescution and other factors.</p>
        <p v-if="model.influence === 'limited'">This stage is <b>limited</b> influence from the procescution.</p> -->
      </div>
      <div class="side">
        <h4 v-if="model.links.length > 0">Explore data at this step. </h4>
        <section v-for="link in model.links" class="link shrink-hover">
          <img :src="chartIcon"/>
          <p>{{ getText(link) }}</p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import Asset from "@/utils/assets"
import Text from "@/utils/text"

import { mapGetters } from "vuex"

export default {
  name: "NodeTakeover",
  props:{
    model: Object
  },
  computed:{
    ...mapGetters({
      langId: "text/langId",
      glossaryModel: "text/glossaryModel"
    }),
    chartIcon(){
      return Asset.load("icons/line-chart.svg");
    },
    closeIcon(){
      return Asset.load("icons/x.svg");
    }
  },
  methods:{
    getText(model){
      return Text.get(model, this.langId);
    },
    getDescription(model){
      var text = Text.get(model, this.langId);
      return Text.checkGlossary(text, this.glossaryModel, this.langId);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

section{
  border-radius: 20px;
  color: $color-white;

  h2{
    padding-top: 5rem;
  }

  h4{
    padding-top: 1rem;
  }
}

.nodeTakeover{
  position: fixed;
  width: 100vw;
  height: 100vh;

  .main{
    position: absolute;
    vertical-align: top;
    width: 70%;
    height: 60%;
    max-height: 500px;
    background-color: $color-dark-green;
    padding: 3rem;
    margin: 0;
    top: 35%;
    left: 45%;
    transform: translate(-50%, -50%);


    button{
      position: absolute;
      width: 30px;
      height: 30px;

      img{
        position: aboslute;
        width: 100%;
        height: 100%;
      }
    }
  }

  .text{
    display: inline-block;
    width: 55%;

    a{
      color: red;

    }
  }

  .side{
    width: 28%;
    display: inline-block;
    vertical-align: top;
    margin-left: 5rem;
    margin-top: 5rem;

    h4{
      color: $color-white;
      padding-bottom: 1rem;
    }

    p{

    }
  }

  .link{
    width: 100%;
    background-color: $color-white;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;

    img{
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
      padding-right: 1rem;
    }

    p{
      display: inline-block;
      color: $color-black;
    }
  }
}


</style>
