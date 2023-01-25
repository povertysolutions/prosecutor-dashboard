<template>
  <footer v-if="loaded">
    <img class="logo" :src="getIcon(content.main_icon)">

    <div>
      <ul>
        <!-- <img :style="[{src: `url('${getIcon(content.address_icon)}')`}]"> -->
        <img :src="getIcon(content.address_icon)">
        <p>{{getText(content.address)}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.phone_icon)">
        <p>{{getText(content.phone)}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.email_icon)">
        <p>{{getText(content.email)}}</p>
      </ul>
    </div>
    <div>
      <ul>
        <img :src="getIcon(content.twitter_icon)">
        <p>{{getText(content.twitter)}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.facebook_icon)">
        <p>{{getText(content.facebook)}}</p>
      </ul>
    </div>
  </footer>
</template>

<script>
import content from "../../assets/footer.json"
import Asset from "@/utils/assets"
import Text from "@/utils/text"
import { mapGetters } from "vuex"

export default {
  name: "About",
  data(){
    return{
      content: content,
      loaded: true,
    }
  },
  computed:{
    ...mapGetters({
      langId: "text/langId",
    }),
  },
  methods:{
    getText(model){
      return Text.get(model, this.langId);
    },
    getIcon(model){
      if (model && model["icon"]){
        return Asset.load("icons/" + model["icon"]);
      }
      return "";
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
footer {
  width: 100vw;
  height: 12rem;
  background-color: $color-green;
  //position:fixed;
    //bottom:0;
  display: block;

  .logo{
    display: inline-block;
    margin: 3rem 4rem;
    width: 5rem;
    height: 5rem;
    //background-color: $color-light-grey;
    margin-right: 4rem;

  }

  div{
    margin-top: 1rem;
    vertical-align: top;
    display: inline-block;
  }

  ul{
    img{
      display: inline-block;
      width: 1rem;
      height: 1rem;
      //background-color: $color-white;
      //border-radius: 50%;
      margin-right: .5rem;
      vertical-align: middle;
    }
    p{
      display: inline-block;
      color: $color-white;
      vertical-align: middle;
      margin: 0;
    }
  }
}

</style>
