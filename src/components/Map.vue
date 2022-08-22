<template>
  <div id="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" v-if="mapStyle">
      <!-- <MglGeojsonLayer
        :sourceId="geoJsonSource.data.id"
        :source="geoJsonSource"
        layerId="somethingSomething"
        :layer="geoJsonLayer"
      /> -->
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";

const MAPBOX_STYLE_URL = 'mapbox://styles/mapbox/streets-v11';

export default {
  components: {
    MglMap,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg", // your access token. Needed if you using Mapbox maps
      //mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
      geoJsonSource: {
        type: 'geojson',
        data: {
          id: "thisIsMySource",
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [102.0, 0.5]
              },
              properties: {
                id: "value0"
              }
            }
          ]
        },
      },
      geoJsonLayer: {
        type: "circle",
        paint: {
          "circle-color": "red"
        }
      }
    };
  },
  computed:{
    mapStyle(){
      if (this.accessToken){
        return MAPBOX_STYLE_URL;
      }
      return '';
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    //this.mapbox = Mapbox;
  }
};
</script>
