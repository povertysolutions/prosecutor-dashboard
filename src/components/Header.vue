<template>
  <header>
    <RouterLink class="link header landing" to="/">
      <!-- <img class="logo" :src="Asset.load('icons/scale.svg')"> -->
      Prosecutor Dashboard
    </RouterLink>
    <nav>
      <RouterLink class="link header" to="/dashboard/warrants">Data</RouterLink>
      <RouterLink class="link header" to="/flowchart">Flowchart</RouterLink>
      <RouterLink class="link header" to="/about">About</RouterLink>
      <RouterLink class="link header" to="/resources">Resources</RouterLink>

        <button :class="['pill', (lang.id === langId ? 'selected' : '')]" v-for="lang in langModel" @click="translate(lang.id)">
          {{ lang.id }}
        </button>
    </nav>

  </header>
</template>

<script>
import Asset from "@/utils/assets"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      langId: "lang/id",
    }),
    langModel(){
      return Text.getModel();
    }
  },
  methods:{
    translate(id){
      this.$store.dispatch('lang/setLang', id)
    }
  },
  mounted(){
    console.log("lang model: " + Text.getModel())
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

header {
  position: fixed;
  width: 100vw;
  height: 4rem;
  background-color: $color-green;
  z-index: 1000;
  top: 0;

  .landing{
    position: absolute;
    color: $color-white;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 1rem;
    letter-spacing: 1px;
    text-decoration: none;
  }
}

.logo{
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 2px;
  vertical-align: top;
}

nav {
  text-align: right;
  padding-top: .2rem;
  padding-right: 3rem;

  a{
    color: $color-white;
    display: inline-block;

    text-decoration: none;
    line-height: 1em;
    margin: 0 1rem;
    padding: 10px 10px;
    border-radius: 50px;

    &.router-link-exact-active {
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 2px;
    }
  }
}

.pill{
  display: inline-block;
  color: $color-white;
  border-color: $color-white;
  width: 3rem;
  height: 3rem;
  margin-right: .5rem;
  padding: 0;
  border-radius: 50%;

  &.selected{
    background-color: $color-white;
    color: $color-green;
  }
}


</style>
