<template>
  <div id="nav">
    <SingleExtendComponent />
    <MultiExtendComponent />
    <ComponentWithVueTypedMixins />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import SingleExtendComponent from "./components/SingleExtendComponent.vue";
import MultiExtendComponent from "./components/MultiExtendComponent.vue";
import ComponentWithVueTypedMixins from "./components/ComponentWithVueTypedMixins.vue";

export default Vue.extend({
  name: "App",
  components: {
    SingleExtendComponent,
    MultiExtendComponent,
    ComponentWithVueTypedMixins,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
