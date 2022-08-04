<template>
  <header>
    <div class="wrapper">
      <!-- <Module class="test" msg="You did it!"/> -->

      <header>
        <RouterLink class="link header landing" to="/">Prosecutor Dashboard</RouterLink>
        <nav>
          <RouterLink class="link header" to="/dashboard">Data</RouterLink>
          <RouterLink class="link header" to="/background">Flowchart</RouterLink>
          <RouterLink class="link header" to="/about">About</RouterLink>
          <RouterLink class="link header" to="/resources">Resources</RouterLink>
        </nav>
      </header>
    </div>
  </header>

  <RouterView class="router"/>
  <Footer/>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Module from "@/components/Module.vue";
import Footer from "@/components/Footer.vue";

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

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  text-align: right;
  padding-top: .7rem;
  padding-right: 1rem;

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

  .router{
    margin-top: 4rem;
  }
}


</style>
