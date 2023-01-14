<template>
  <div>
    <nav>
      <nuxt-link :to="localePath('/')">Go to homepage</nuxt-link>
      <aside>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </aside>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      const currentEntityLangStatus =
        this.$store.getters["settings/currentEntityLangStatus"];

      // pages that have dynamic language options
      const dynamicLangPages = ["category-slug"];

      if (
        dynamicLangPages.includes(this.getRouteBaseName()) &&
        currentEntityLangStatus
      ) {
        return this.$i18n.locales.filter((lang) => {
          return currentEntityLangStatus?.[lang.locale] === "enabled";
        });
      }

      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  background: #eee;
}

nav aside {
  display: flex;
  gap: 1rem;
}

main {
  padding: 2rem;
}
</style>
