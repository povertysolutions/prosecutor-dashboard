<template>
  <div class="landing">
    <section class="intro">
     <div class="intro-text">
       <h1>{{ getText(content["intro-header"]) }}</h1>
       <p>{{ getText(content["intro-body"]) }}</p>
     </div>
     <div class="intro-links">
      <RouterLink class="pill shrink-hover" to="/flowchart">
         <img :src="icon('multi-arrow.svg')" />
         <div>
           <h3>{{ getText(content["learn-header"]) }}</h3>
           <p>{{ getText(content["learn-body"]) }}</p>
         </div>
       </RouterLink>
       <RouterLink class="pill shrink-hover" to="/dashboard/warrants">
         <img :src="icon('analyze.svg')"/>
         <div>
           <h3>{{ getText(content["analyze-header"]) }}</h3>
           <p>{{ getText(content["analyze-body"]) }}</p>
         </div>
       </RouterLink>
     </div>
    </section>

    <hr>

    <section class="explore">
     <h2>{{ getText(content["explore-header"]) }}</h2>

     <RouterLink v-for="(topic, key) in topics" :to="'/dashboard/' + key + '/'" class="unstyled-link shrink-hover">
       <div class="circle"></div>
       <img :src="icon(topic.icon)">
       <h4>{{ getText(topic["label"]) }}</h4>
     </RouterLink>
    </section>

    <hr>

    <section class="credits">
    <h2>{{content["credit-header"][lang]}}</h2>
     <a class="unstyled-link shrink-hover" href="https://www.washtenaw.org/1070/Prosecuting-Attorney">
       <img :src="icon('washtenaw2.jpg')">
       <h4>{{ getText(content["county-header"]) }}</h4>
       <p>{{ getText(content["county-body"]) }}</p>
     </a>
     <a class="unstyled-link shrink-hover" href="https://poverty.umich.edu/">
       <img :src="icon('um.png')">
       <h4>{{ getText(content["poverty-solutions-header"]) }}</h4>
       <p>{{ getText(content["poverty-solutions-body"]) }}</p>
     </a>
     <a class="unstyled-link shrink-hover" href="https://www.aclu.org/">
       <img :src="icon('aclu.png')">
       <h4>{{ getText(content["aclu-header"]) }}</h4>
       <p>{{ getText(content["aclu-body"])}}</p>
     </a>
     <!-- <button class="pill"> {{content["credits-button"][lang]}} </button> -->
    </section>
  </div>
</template>

<script>
import content from "../../assets/landing.json"
import topicsJson from "../../assets/topics.json"
import Asset from "@/utils/assets"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default {
  name: "Landing",
  data(){
    return{
      lang: "en",
      content: content,
      topics: topicsJson
    }
  },
  computed:{
    ...mapGetters({
      langId: "lang/id",
    }),
  },
  watch:{
    langId(){
      console.log("langId: " + this.langId)
    }
  },
  methods: {
    icon(file){
      return Asset.load("icons/" + file);
    },
    getText(model){
      return Text.get(model, this.langId);
    },
    currentLang(){
      return "";
    }

      //return Text.getCurrentLa
  },

  mounted(){
    //console.log(Text.getId())
    //console.log("current language id:" + Text.currentLanguageId);
    console.log("current language id: " + Text.get(this.content["intro-header"]));
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

  .intro-text{
    display: inline-block;
    width: 40%;
    padding-right: 3rem;
  }

  .intro-links{
    display: inline-block;
    width: 50%;
  }

  .pill{
    display: inline-block;
    background-color: $color-dark-blue;
    border-color: $color-dark-blue;
    margin-bottom: 1rem;
    text-align: left;
    padding: 2rem;
    min-width: 25rem;

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
      width: 70%;
      color: $color-white;
    }

    p{
      font-weight: normal;
      margin-top: .5rem;
    }
  }
}

.data, .explore, .credits{
  h2{
    padding-bottom: 2rem;
  }
  div, a{
    width: 30%;
    min-width: 10rem;
    max-width: 15rem;
    display: inline-block;
    padding-right: 1rem;
    text-align: center;
    vertical-align: top;
    color: $color-black;

    img{
      width: auto;
      height: 5rem;
      margin-bottom: 1rem;
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

.explore{

  .unstyled-link{
    padding-right: 2rem;
    color: $color-black;
    text-align: center;

    img{
      width: 5rem;
      height: 5rem;
      position: absolute;
      margin-top: 1rem;
      transform: translate(-150%, 0);

    }
    .circle{
      background-color: $color-green;
      border-radius: 10%;
      width: 1rem;
      height: 8rem;
      display: inline-block;
    }
  }
}

</style>
