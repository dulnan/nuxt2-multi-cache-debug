<template>
  <div>
    <div v-if="showProduct">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryProductPage",

  data() {
    return {
      product: null,
    };
  },

  async fetch() {
    await this.fetchProduct();
    this.$cache.route.setCacheable();
  },

  computed: {
    showProduct() {
      return this.product && this.product?.id;
    },
  },

  methods: {
    async fetchProduct() {
      await this.$store.dispatch("products/get", 1);
      const product = this.$store.getters["products/currentProduct"];
      this.product = product;
    },
  },
};
</script>
