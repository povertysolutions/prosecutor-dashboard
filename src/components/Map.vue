<template>
  <l-map style="height:80vh" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-geo-json v-if="geojson" :geojson="geojson" :options="options" :options-style="styleFunction" />
  </l-map>
</template>

<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer} from "@vue-leaflet/vue-leaflet";

var jsonData = require("../../assets/boundaries.geojson")

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      zoom: 8,
      center: [43, -85],
      // zoom: 6,
      // center: [48, -1.219482],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      geojson: jsonData
    };
  },
  computed:{
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction() {
        //const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
        return () => {
          return {
            weight: 2,
            color: "#ff0000",
            opacity: 1,
            fillColor: "#0000ff",
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
  // async beforeMount() {
  //   // HERE is where to load Leaflet components!
  //   const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
  //
  //   // And now the Leaflet circleMarker function can be used by the options:
  //   this.geojsonOptions.pointToLayer = (feature, latLng) =>
  //     circleMarker(latLng, { radius: 8 });
  //   this.mapIsReady = true;
  // },

  mounted(){
    // var jsonData = require("../../assets/county-boundaries.geojson")
    // this.geojson = jsonData;
    // var jsonData = require.context('../assets/data/', false, /\.json$/)
    // var loaded = jsonData('./' + fileName)
    //
    // return JSON.parse(JSON.stringify(loaded));

    console.log(this.geojson);
  }
};
</script>
