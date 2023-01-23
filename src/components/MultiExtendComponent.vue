<template>
  <li>
    <code>{{ $options.name }}</code> => ❌ This one doesn't work with ESLint :/
  </li>
</template>

<script lang="ts">
import Vue from "vue";

import LogOnCreatedMixin from "@/mixins/LogOnCreatedMixin";

const BaseComponent = Vue.extend({});

export default BaseComponent.extend({
  name: "MultiExtendComponent",
  // line below should report a warning since I disallowed `mixins` usage,
  // but in this case it doesn't work as ESLint cannot detect that `BaseComponent.extend()`
  // should be trated the same as `Vue.extend()` :/
  mixins: [LogOnCreatedMixin],
});
</script>
