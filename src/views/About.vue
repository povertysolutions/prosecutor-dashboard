<template>
  <div class="about">
     <h2>{{content["intro-header"][lang]}}</h2>
     <p>{{content["intro-body"][lang]}}</p>
     <hr>
     <h2>{{content["background-header"][lang]}}</h2>
     <p>{{content["background-body"][lang]}}</p>
     <hr>
     <h2>{{content["justice-system-header"][lang]}}</h2>
     <p>{{content["justice-system-body"][lang]}}</p>
   </div>
</template>

<script>
import content from "../../assets/about.json"

export default {
  name: "About",
  data(){
    return{
      content: content
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.about{
  //position: absolute;
  margin: 5rem 10rem;
  padding: 2rem;
  min-width: 500px;
  //border: 1px blue solid;
}

hr{
  margin: 2rem 0;
}


</style>
