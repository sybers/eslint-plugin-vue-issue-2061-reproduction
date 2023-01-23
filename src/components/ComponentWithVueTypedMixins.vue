<template>
  <li>
    <code>{{ $options.name }}</code> => ❌ This one doesn't work with ESLint :/
  </li>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";

import LogOnCreatedMixin from "@/mixins/LogOnCreatedMixin";

export default mixins(LogOnCreatedMixin).extend({
  name: "ComponentWithVueTypedMixins",
  // line below should report a warning since I disallowed `mixins` usage,
  // but in this case it doesn't work as ESLint cannot detect that `mixins(...).extend()`
  // should be trated the same as `Vue.extend()` :/
  mixins: [LogOnCreatedMixin],
});
</script>
