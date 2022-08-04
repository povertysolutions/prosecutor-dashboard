<template>
  <div class="nodeTakeover">

    <section class="main">
      <button @click="$emit('close')">x</button>
      <div class="text">
        <h2>This is a node takeover.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="side">
        <h4>Explore data at this step. </h4>
        <section class="top">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod > </p>
        </section>
        <section class="bottom">
          <p>Sed do eiusmod tempor incididunt ut labore et dolore > </p>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

section{
  border-radius: 20px;
  padding: 2rem;

  h2{
    color: $color-black;
    padding-top: 5rem;
  }

  p{
    color: $color-black;
  }
}

.nodeTakeover{
  position: fixed;
  width: 100vw;
  height: 100vh;

  .main{
    vertical-align: top;
    width: 85%;
    height: 80%;
    max-height: 500px;
    background-color: $color-light-grey;

    button{
      position: absolute;
      color: $color-black;
      font-size: 30px;
      transform: scale(120%, 100%);
    }
  }

  .text{
    display: inline-block;
    width: 60%;
  }

  .side{
    width: 30%;
    display: inline-block;
    vertical-align: top;
    margin-left: 1rem;

    h4{
      color: $color-black;
      padding-bottom: 1rem;
    }

    p{

    }
  }

  .top{
    width: 100%;
    height: 120px;
    background-color: $color-white;
    border: 2px solid $color-green;
    margin-bottom: 1rem;

    p{
      color: $color-green;
    }
  }
  .bottom{
    width: 100%;
    height: 120px;
    background-color: $color-white;
    border: 2px solid $color-green;

    p{
      color: $color-green;
    }
  }
}

</style>
