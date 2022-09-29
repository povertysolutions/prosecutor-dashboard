<template>
    <div class="wrapper">
      <Header/>
    </div>
  <RouterView class="router"/>
  <Footer/>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Asset from "@/utils/assets"
import languages from "@/../assets/languages.json"

import { mapGetters } from "vuex"

export default {
  name: 'App',
  components:{
    Header, Footer
  },
  mounted(){
      this.$store.dispatch('lang/load')
  }
}


</script>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
}

.router{
  margin-top: 4rem;
}



</style>
