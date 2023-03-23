<template>
  <div>
    <l-map :zoom="zoom" :center="center" class="map">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-geo-json
  v-if="show"
  :geojson="geojson"
  :options="options"
/>
    </l-map>
  </div>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer} from "@vue-leaflet/vue-leaflet";
import Color from "colorjs.io";

var jsonData = require("../../assets/zip-boundaries.geojson")

function calculateColor(feature){
  var r = Math.random();
  let color = new Color("#dce0f7");
  let color2 = new Color("#955196");
  let gradient = color.range(color2);
  var randomColor = gradient(r);
  var converted = rgbToHex(randomColor)
  return converted;
}

function componentToHex(c) {
  var n = Math.floor(c * 255)
  var hex = n.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(c) {
  var color = c.srgb;
  return "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
}

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      zoom: 10,
      center: [42.25, -83.9],
      // zoom: 6,
      // center: [48, -1.219482],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      geojson: jsonData,
      show: true,
      enableTooltip: true,
      options: {
        style: function(feature) {
          var randomColor = calculateColor(feature);
          return {
            lineColor: "#000000",
            weight: 1,
            color: randomColor,
            fillOpacity: .6
          }
        }
      }
    }
  },
  methods:{

  },
  computed:{
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    }
    },
  mounted(){
    // var jsonData = require("../../assets/county-boundaries.geojson")
    // this.geojson = jsonData;
    // var jsonData = require.context('../assets/data/', false, /\.json$/)
    // var loaded = jsonData('./' + fileName)
    //
    // return JSON.parse(JSON.stringify(loaded));

    //console.log(this.geojson);
    //var c = this.calculateColor("hey");

  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.map{
  //width: 100%;
}

</style>
