<template>
  <div class="cell cell-map">
    <!-- update app state when a feature is selected -->
    <MapContainer :geojson="geojson" v-on:select="selected = $event">
    </MapContainer>
  </div>
  <div class="cell cell-edit">
    <EditComponent :geojson="geojson" v-on:change="geojson = $event">
    </EditComponent>
  </div>
  <div class="cell cell-inspect">
    <!-- give the selected feature as input -->
    <InspectComponent :feature="selected"></InspectComponent>
  </div>
</template>

<script>
import { coordinates } from "./data";
import MapContainer from "./components/MapContainer";
import EditComponent from "./components/Edit";
import InspectComponent from "./components/Inspect";
export default {
  name: "App",
  components: {
    InspectComponent,
    EditComponent,
    MapContainer,
  },
  data: () => ({
    // the selected feature is part of the app state
    selected: undefined,
    // this is the initial GeoJSON data
    geojson: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates,
      },
    },
  }),
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  display: grid;
  grid-template-columns: 100vh;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
}

.cell {
  border-radius: 4px;
  background-color: lightgrey;
}

.cell-map {
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.cell-edit {
  grid-column: 2;
  grid-row: 1;
}

.cell-inspect {
  grid-column: 2;
  grid-row: 2;
}
</style>
