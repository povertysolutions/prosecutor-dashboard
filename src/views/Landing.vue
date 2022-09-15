<template>
  <div class="landing">
    <section class="intro">
     <div class="intro-text">
       <h1>{{content["intro-header"][lang]}}</h1>
       <p>{{content["intro-body"][lang]}}</p>
     </div>
     <div class="intro-links">
      <RouterLink class="pill shrink-hover" to="/flowchart">
         <img :src="icon('multi-arrow.svg')" />
         <div>
           <h3>{{content["learn-header"][lang]}}</h3>
           <p>{{content["learn-body"][lang]}}</p>
         </div>
       </RouterLink>
       <RouterLink class="pill shrink-hover" to="/dashboard/warrants">
         <img :src="icon('analyze.svg')"/>
         <div>
           <h3>{{content["analyze-header"][lang]}}</h3>
           <p>{{content["analyze-body"][lang]}}</p>
         </div>
       </RouterLink>
     </div>
    </section>

    <hr>

    <section class="explore">
     <h2>{{content["explore-header"][lang]}}</h2>

     <div v-for="topic in topics">
       <div class="circle"></div>
       <img :src="icon(topic.icon)">
       <h4>{{topic["label"][lang]}}</h4>
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
import topicsJson from "../../assets/topics.json"
import Asset from "@/utils/assets"

export default {
  name: "Landing",
  data(){
    return{
      lang: "en",
      content: content,
      topics: topicsJson
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

  button{
    transition: all 100ms ease-in-out;

    &:hover{
      transform: scale(105%)
    }
  }
}

</style>
