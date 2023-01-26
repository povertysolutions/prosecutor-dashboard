<template>
  <div class="about">
     <h2>Glossary</h2>
     <div v-for="(object, key) in content">
       <h4>{{object.term.en}}</h4>
       <p>{{object.definition.en}}</p>
     </div>
   </div>
</template>

<script>
import content from "../../assets/glossary.json"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default {
  name: "Glossary",
  // data(){
  //   return{
  //     content: content
  //   }
  // },
  computed:{
    ...mapGetters({
      langId: "text/langId",
      content: "text/glossaryModel"
    })
  },
  methods:{
    getText(model){
      return Text.get(model, this.langId);
    }
  },

  mounted(){
    //to do -- listen for language switch and update
    // var orderedGlossary = this.content.sort((a, b) => a.term.en > b.term.en ? 1 : -1);
    // this.content = orderedContent;
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

  // h2{
  //   padding-bottom: 1rem;
  // }

  h4{
    padding-top: 2rem;
  }
}

hr{
  margin: 2rem 0;
}



</style>
