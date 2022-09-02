<template>
  <footer v-if="loaded">
    <img class="logo" :src="getIcon(content.main_icon)">

    <div>
      <ul>
        <!-- <img :style="[{src: `url('${getIcon(content.address_icon)}')`}]"> -->
        <img :src="getIcon(content.address_icon)">
        <p>{{content.address[lang]}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.phone_icon)">
        <p>{{content.phone[lang]}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.email_icon)">
        <p>{{content.email[lang]}}</p>
      </ul>
    </div>
    <div>
      <ul>
        <img :src="getIcon(content.twitter_icon)">
        <p>{{content.twitter[lang]}}</p>
      </ul>
      <ul>
        <img :src="getIcon(content.facebook_icon)">
        <p>{{content.facebook[lang]}}</p>
      </ul>
    </div>
  </footer>
</template>

<script>
import content from "../../assets/footer.json"
import Asset from "@/utils/assets"

export default {
  name: "About",
  data(){
    return{
      lang: "en",
      content: content,
      loaded: true,
    }
  },
  methods:{
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
