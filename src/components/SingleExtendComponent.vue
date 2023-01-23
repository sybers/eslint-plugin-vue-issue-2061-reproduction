<template>
  <li>
    <code>{{ $options.name }}</code> => ✅ This one works well with ESLint
  </li>
</template>

<script lang="ts">
import Vue from "vue";

import LogOnCreatedMixin from "@/mixins/LogOnCreatedMixin";

export default Vue.extend({
  name: "SingleExtendComponent",
  // line below should report a warning since I disallowed `mixins` usage
  mixins: [LogOnCreatedMixin],
});
</script>
