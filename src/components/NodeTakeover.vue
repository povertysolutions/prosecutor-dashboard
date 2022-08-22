<template>
  <div class="nodeTakeover">
    <section class="main">
      <button @click="$emit('close')"><img :src="closeIcon"/></button>
      <div class="text">
        <h2>{{model.label[lang]}}</h2>
        <!-- <p>{{model.description[lang]}}</p> -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <br>
        <p v-if="model.influence === 'independent'">This stage is <b>independent</b> from the procescution.</p>
        <p v-if="model.influence === 'sole'">This stage is <b>solely</b> controlled by the prosecution</p>
        <p v-if="model.influence === 'mixed'">This stage has <b>mixed</b> influence from the procescution and other factors.</p>
        <p v-if="model.influence === 'limited'">This stage is <b>limited</b> influence from the procescution.</p>
      </div>
      <div class="side">
        <h4 v-if="model.links.length > 0">Explore data at this step. </h4>
        <section v-for="link in model.links" class="link">
          <img :src="chartIcon"/>
          <p>{{ link[lang] }}</p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import Asset from "@/utils/assets"

export default {
  name: "NodeTakeover",
  props:{
    model: Object
  },
  data(){
    return {
      lang: "en"
    }
  },
  computed:{
    chartIcon(){
      return Asset.load("icons/line-chart.svg");
    },
    closeIcon(){
      return Asset.load("icons/x.svg");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

section{
  border-radius: 20px;

  h2{
    color: $color-black;
    padding-top: 5rem;
  }

  p{
    color: $color-black;
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
    background-color: $color-pale-blue;
    padding: 3rem;
    margin: 0;
    top: 45%;
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
  }

  .side{
    width: 28%;
    display: inline-block;
    vertical-align: top;
    margin-left: 5rem;
    margin-top: 5rem;

    h4{
      color: $color-black;
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
    transition: all 100ms ease-in-out;

    &:hover{
      padding: 1.25rem 1.75rem;
    }

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
