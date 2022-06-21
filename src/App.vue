<template>
  <header>
    <div class="wrapper">
      <!-- <Module class="test" msg="You did it!"/> -->

      <header>
        <nav>
          <RouterLink class="link header" to="/">Home</RouterLink>
          <RouterLink class="link header" to="/dashboard">Data</RouterLink>
          <RouterLink class="link header" to="/about">About</RouterLink>
          <RouterLink class="link header" to="/resources">Resources</RouterLink>
        </nav>
      </header>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Module from "@/components/Module.vue";


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
  width: 100vw;
  height: 4rem;
  background-color: $color-green;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  padding-top: .7rem;

  a{
    color: $color-white;
    display: inline-block;
    text-decoration: none;
    line-height: 1em;
    margin: 0 1rem;
    padding: 10px 15px;
    border-radius: 50px;

    &.router-link-exact-active {
      color: $color-green;
      background-color: $color-white;
    }
  }
}



</style>
