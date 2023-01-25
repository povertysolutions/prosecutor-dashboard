<template>
  <div class="about">
     <h2>{{getText(content["intro-header"])}}</h2>
     <p>{{getText(content["intro-body"])}}</p>
     <hr>
     <h2>{{getText(content["background-header"])}}</h2>
     <p>{{getText(content["background-body"])}}</p>
     <hr>
     <h2>{{getText(content["justice-system-header"])}}</h2>
     <p>{{getText(content["justice-system-body"])}}</p>
   </div>
</template>

<script>
import content from "../../assets/about.json"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default {
  name: "About",
  data(){
    return{
      content: content
    }
  },
  computed:{
    ...mapGetters({
      langId: "text/langId",
    })
  },
  methods:{
    getText(model){
      return Text.get(model, this.langId);
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
