<template>
  <ul>
    <!-- loop on the feature’s attributes -->
    <li :key="prop" v-for="prop in props">
      <b>{{ prop }}:</b> {{ feature.get(prop) }}
    </li>
  </ul>
</template>

<script>
import Feature from "ol/Feature";
export default {
  name: "InspectComponent",
  props: {
    // the only input is an OpenLayers Feature instance
    feature: Feature,
  },
  computed: {
    // this will return an empty array if no feature available
    props() {
      return this.feature
        ? this.feature
            .getKeys()
            .filter((key) => key !== this.feature.getGeometryName())
        : [];
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
