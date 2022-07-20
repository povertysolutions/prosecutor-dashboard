<template>
  <div class="landing">
    <section class="intro">
     <div>
       <h1>{{content["intro-header"][lang]}}</h1>
       <p>{{content["intro-body"][lang]}}</p>
       <button class="pill"> {{content["data-button"][lang]}} </button>
     </div>
     <img>
    </section>
    <hr>
    <section class="data">
      <h2>{{content["empower-header"][lang]}}</h2>
     <div>
       <img>
       <h4>{{content["learn-header"][lang]}}</h4>
       <p>{{content["learn-body"][lang]}}</p>
       <button class="pill"> {{content["learn-button"][lang]}} </button>
     </div>
     <div>
       <img>
       <h4>{{content["analyze-header"][lang]}}</h4>
       <p>{{content["analyze-body"][lang]}}</p>
       <button class="pill"> {{content["analyze-button"][lang]}} </button>
     </div>
     <div>
       <img>
       <h4>{{content["engage-header"][lang]}}</h4>
       <p>{{content["engage-body"][lang]}}</p>
       <button class="pill"> {{content["engage-button"][lang]}} </button>
     </div>
    </section>
    <hr>
    <section class="resources">
     <h2>{{content["explore-header"][lang]}}</h2>
     <div>
       <img>
       <h4>{{content["filing-decisions-header"][lang]}}</h4>
       <p>{{content["filing-decisions-body"][lang]}}</p>
     </div>
     <div>
       <img>
       <h4>{{content["filed-charges-header"][lang]}}</h4>
       <p>{{content["filed-charges-body"][lang]}}</p>
     </div>
     <div>
       <img>
       <h4>{{content["habitual-offenders-header"][lang]}}</h4>
       <p>{{content["habitual-offenders-body"][lang]}}</p>
     </div>
     <div>
       <img>
       <h4>{{content["case-outcomes-header"][lang]}}</h4>
       <p>{{content["case-outcomes-body"][lang]}}</p>
     </div>
    </section>
    <hr>
    <section class="credits">
    <h2>{{content["credit-header"][lang]}}</h2>
     <div>
       <img>
       <h4>{{content["county-header"][lang]}}</h4>
       <p>{{content["county-body"][lang]}}</p>
     </div>
     <div>
       <img>
       <h4>{{content["poverty-solutions-header"][lang]}}</h4>
       <p>{{content["poverty-solutions-body"][lang]}}</p>
     </div>
     <div>
       <img>
       <h4>{{content["aclu-header"][lang]}}</h4>
       <p>{{content["aclu-body"][lang]}}</p>
     </div>
     <!-- <button class="pill"> {{content["credits-button"][lang]}} </button> -->
    </section>
  </div>
</template>

<script>
import content from "../../assets/landing.json"

export default {
  name: "Landing",
  data(){
    return{
      lang: "en",
      content: content
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

  div{
    width: 40%;
    display: inline-block;
    vertical-align: top;
    margin-right: 3rem;
  }

  img{
    display: inline-block;
    background-color: $color-light-grey;
    width: 500px;
    height: 350px;
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
      width: 6rem;
      height: 6rem;
      background-color: $color-light-grey;
      border-radius: 50%;
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

</style>
