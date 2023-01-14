<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link">
        <nuxt-link :to="link">{{ link }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    links() {
      return [
        "/category1/test",
        "/category2/test",
        "/category-foo/anything",
        "/category-foo/something",
      ].map((v) => this.localePath(v));
    },
  },
});
</script>
