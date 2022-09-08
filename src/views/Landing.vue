<template>
  <div class="landing">
    <section class="intro">
     <div>
       <h1>{{content["intro-header"][lang]}}</h1>
       <p>{{content["intro-body"][lang]}}</p>

     </div>

     <div>
       <button class="pill">
         <img :src="icon('multi-arrow.svg')" />
         <div>
           <h3>{{content["learn-header"][lang]}}</h3>
           <p>{{content["learn-body"][lang]}}</p>
         </div>
       </button>
       <button class="pill">
         <img :src="icon('analyze.svg')"/>
         <div>
           <h3>{{content["analyze-header"][lang]}}</h3>
           <p>{{content["analyze-body"][lang]}}</p>
         </div>
       </button>
     </div>
    </section>
    <hr>
    <section class="resources">
     <h2>{{content["explore-header"][lang]}}</h2>
     <div>
       <img :src="icon('flowchart.svg')">
       <h4>{{content["filing-decisions-header"][lang]}}</h4>
       <p>{{content["filing-decisions-body"][lang]}}</p>
     </div>
     <div>
       <img :src="icon('flowchart.svg')">
       <h4>{{content["filed-charges-header"][lang]}}</h4>
       <p>{{content["filed-charges-body"][lang]}}</p>
     </div>
     <div>
       <img :src="icon('flowchart.svg')">
       <h4>{{content["habitual-offenders-header"][lang]}}</h4>
       <p>{{content["habitual-offenders-body"][lang]}}</p>
     </div>
     <div>
       <img :src="icon('flowchart.svg')">
       <h4>{{content["case-outcomes-header"][lang]}}</h4>
       <p>{{content["case-outcomes-body"][lang]}}</p>
     </div>
    </section>
    <hr>
    <section class="credits">
    <h2>{{content["credit-header"][lang]}}</h2>
     <div>
       <img :src="icon('washtenaw2.jpg')">
       <h4>{{content["county-header"][lang]}}</h4>
       <p>{{content["county-body"][lang]}}</p>
     </div>
     <div>
       <img :src="icon('um.png')">
       <h4>{{content["poverty-solutions-header"][lang]}}</h4>
       <p>{{content["poverty-solutions-body"][lang]}}</p>
     </div>
     <div>
       <img :src="icon('aclu.png')">
       <h4>{{content["aclu-header"][lang]}}</h4>
       <p>{{content["aclu-body"][lang]}}</p>
     </div>
     <!-- <button class="pill"> {{content["credits-button"][lang]}} </button> -->
    </section>
  </div>
</template>

<script>
import content from "../../assets/landing.json"
import Asset from "@/utils/assets"

export default {
  name: "Landing",
  data(){
    return{
      lang: "en",
      content: content
    }
  },
  methods: {
    icon(file){
      return Asset.load("icons/" + file);
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.landing{
  margin: 5rem 2rem;
  padding: 2rem;
  //border: 1px blue solid;
}


hr{
  margin: 2rem 0;
}

section{
  //border: 1px magenta solid;
}

.intro{
  .pill{
    background-color: $color-dark-blue;
    border-color: $color-dark-blue;
    margin-bottom: 1rem;
    text-align: left;
    padding: 2rem;
    height: 12rem;

    &:first-child {
      background-color: $color-light-orange;
      border-color: $color-light-orange;
    }

    img{
      display: inline-block;
      width: 5rem;
      height: 5rem;
      vertical-align: middle;
      margin-right: 2rem;
      margin-left: 1rem;
    }

    div{
      display: inline-block;
      vertical-align: middle;
      width: 65%;
      display: inline-block;
      color: $color-white;
    }

    p{
      font-weight: normal;
      margin-top: .5rem;
    }
  }

  div{
    width: 40%;
    display: inline-block;
    vertical-align: top;
    margin-right: 3rem;
  }
}

.data, .resources, .credits{
  h2{
    padding-bottom: 2rem;
  }
  div{
    width: 30%;
    min-width: 10rem;
    max-width: 15rem;
    display: inline-block;
    padding-right: 1rem;
    text-align: center;
    vertical-align: top;

    img{
      width: auto;
      height: 5rem;
      margin-bottom: 1rem;
      background-color: $color-white;
    }

    p{
      height: 4rem;
    }
  }

  .credits{
    button{
      display: inline-block;
    }
  }
}

</style>
