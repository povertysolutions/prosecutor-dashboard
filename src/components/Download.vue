<template>
    <div class="download">
      <div class="typeGroup">
        <h4>Download Type</h4>
        <button v-for="(fileType, key) in fileTypes"
                :class="['fileType', fileType == currentFileType ? 'selected' : '']"
                @click="press(fileType)">
          <div :class="['circle', fileType == currentFileType ? 'selected' : '']"></div>
          {{ fileType }}

        </button>
      </div>

      <div class="downloadGroup">
        <button class="pill" @click="downloadData"> Download </button>
        <a id="downloadAnchorElem" style="display:none" ></a>
      </div>
    </div>
</template>

<script>
import Models from "../models.js"

export default {
  data(){
    return {
      currentFileType: "json",
      fileTypes: ["json", "csv", "xml"]
    }
  },
  methods:{
    press(next){
      console.log(next);
      this.currentFileType = next;
    },
    downloadData(){
      console.log("click!")
      var data = Models.getCurrentModel();
      console.log(data);
      var dataStr = "data:text/" + this.currentFileType + ";charset=utf-8," + encodeURIComponent(JSON.stringify(data));
      var dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute("href",     dataStr     );
      dlAnchorElem.setAttribute("download", "data." + this.currentFileType);
      dlAnchorElem.click();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";



.typeGroup{
  display: inline-block;
  vertical-align: top;
  width: 50%;
  //margin: 0 1rem;
}

.downloadGroup{
  display: inline-block;
  vertical-align: top;
  width: 40%;
  //margin: 0 1rem;
}

.fileType{
  display: inline-block;
  color: $color-medium-grey;
  width: 100%;
  text-align: left;
  margin-bottom: 2px;
  list-style: none;
  vertical-align: middle;

  &.selected{
    color: $color-black;
  }

  .circle{
    display: inline-block;
    vertical-align: middle;
    background-color: transparent;
    width: 1rem;
    height: 1rem;
    border-radius: 30px;
    border: 2px $color-green solid;
    margin-left: -10px;

    &.selected{
      background-color: $color-green;
    }
  }
}

</style>
